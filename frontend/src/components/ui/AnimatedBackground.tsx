"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const bodyObserver = new ResizeObserver(() => resize());
    bodyObserver.observe(document.body);

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: "solid" | "ring" | "square";
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }[] = [];

    const colors = [
      "#22d3ee",
      "#7c5cff",
      "#f472b6",
      "#4ade80",
      "#fbbf24",
      "#a78bfa",
    ];

    for (let i = 0; i < 70; i++) {
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4, // Floating movement speed (X)
        vy: (Math.random() - 0.5) * 0.4, // Floating movement speed (Y)
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type:
          Math.random() > 0.8
            ? "ring"
            : Math.random() > 0.6
              ? "square"
              : "solid",
        opacity: Math.random() * 0.6 + 0.2,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Move dots and render constellation connection lines
      for (let i = 0; i < dots.length; i++) {
        const dotA = dots[i];

        // Update particle positions
        dotA.x += dotA.vx;
        dotA.y += dotA.vy;

        // Bounce off screen boundaries
        if (dotA.x < 0 || dotA.x > canvas.width) dotA.vx *= -1;
        if (dotA.y < 0 || dotA.y > canvas.height) dotA.vy *= -1;

        // Connect nearby dust particles with thin lines (Constellation effect)
        for (let j = i + 1; j < dots.length; j++) {
          const dotB = dots[j];
          const dx = dotA.x - dotB.x;
          const dy = dotA.y - dotB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(dotA.x, dotA.y);
            ctx.lineTo(dotB.x, dotB.y);
            ctx.strokeStyle = "rgba(0, 217, 255, 0.15)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Render dust particles
      dots.forEach((dot) => {
        dot.pulse += dot.pulseSpeed;
        const alpha = dot.opacity * (0.5 + 0.5 * Math.sin(dot.pulse));

        ctx.globalAlpha = alpha;

        if (dot.type === "solid") {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = dot.color;
          ctx.shadowColor = dot.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (dot.type === "ring") {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          const s = dot.size * 3;
          ctx.fillStyle = dot.color;
          ctx.fillRect(dot.x - s / 2, dot.y - s / 2, s, s);
        }

        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      bodyObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        backgroundColor: "#080810",
        backgroundImage: `
          linear-gradient(to right, rgba(0, 217, 255, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 217, 255, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
