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

    const dustParticles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }[] = [];

    // Strictly cyan glowing dust particles
    const cyanColor = "#00d9ff";

    for (let i = 0; i < 85; i++) {
      dustParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35, // Floating speed X
        vy: (Math.random() - 0.5) * 0.35, // Floating speed Y
        size: Math.random() * 2.5 + 1, // Subtle dust grain sizes
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Move dust particles and render constellation connection lines
      for (let i = 0; i < dustParticles.length; i++) {
        const pA = dustParticles[i];

        // Move dust
        pA.x += pA.vx;
        pA.y += pA.vy;

        // Wrap around screen edges smoothly
        if (pA.x < 0) pA.x = canvas.width;
        if (pA.x > canvas.width) pA.x = 0;
        if (pA.y < 0) pA.y = canvas.height;
        if (pA.y > canvas.height) pA.y = 0;

        // Draw subtle cyan connecting lines between close dust nodes
        for (let j = i + 1; j < dustParticles.length; j++) {
          const pB = dustParticles[j];
          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Render cyan glowing dust particles
      dustParticles.forEach((p) => {
        p.pulse += p.pulseSpeed;
        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = cyanColor;
        ctx.shadowColor = cyanColor;
        ctx.shadowBlur = 8; // Cyan glow effect
        ctx.fill();
        ctx.shadowBlur = 0;
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
        style={{ opacity: 0.85 }}
      />
    </div>
  );
}
