"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A real, self-contained Three.js scene: a wireframe icosahedron shell
 * orbiting a glowing core, surrounded by a drifting particle field, with
 * mouse-parallax camera movement. Used on the "3D Experiences" service
 * page as a working demonstration of the capability itself, not a stub.
 *
 * Everything here is vanilla three.js (matches the "three" dependency
 * already in package.json — no extra libraries required). The effect
 * fully tears down the renderer, geometries, materials, and listeners on
 * unmount so it is safe inside Next.js client navigation.
 */
export default function ThreeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // ── Scene / camera / renderer ──────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Lights ──────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const pointLight1 = new THREE.PointLight(0x7c5cff, 3.5, 20);
    pointLight1.position.set(3, 2, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x22d3ee, 3, 20);
    pointLight2.position.set(-3, -2, 3);
    scene.add(pointLight2);

    // ── Glowing core ────────────────────────────────────────────────
    const coreGeometry = new THREE.IcosahedronGeometry(1.15, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c5cff,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.35,
      metalness: 0.6,
      roughness: 0.25,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // ── Outer wireframe shell ──────────────────────────────────────
    const shellGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    scene.add(shell);

    // ── Particle field ──────────────────────────────────────────────
    const particleCount = 260;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf472b6,
      size: 0.03,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ── Mouse-parallax state ───────────────────────────────────────
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.6;
      targetRotationX = y * 0.4;
    };
    container.addEventListener("pointermove", handlePointerMove);

    // ── Resize handling ─────────────────────────────────────────────
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ── Animation loop ──────────────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      core.rotation.y = elapsed * 0.35;
      core.rotation.x = elapsed * 0.15;

      shell.rotation.y = -elapsed * 0.18;
      shell.rotation.x = elapsed * 0.1;

      particles.rotation.y = elapsed * 0.04;

      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      scene.rotation.x = currentRotationX;
      scene.rotation.y = currentRotationY;

      const pulse = 1 + Math.sin(elapsed * 1.5) * 0.04;
      core.scale.setScalar(pulse);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // ── Cleanup ──────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);

      coreGeometry.dispose();
      coreMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D scene demonstrating HEROY's WebGL and Three.js capability"
      role="img"
    />
  );
}