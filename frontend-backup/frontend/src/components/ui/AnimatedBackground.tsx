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
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: {
      x: number;
      y: number;
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

    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 5000,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type:
          Math.random() > 0.7
            ? "ring"
            : Math.random() > 0.5
            ? "square"
            : "solid",
        opacity: Math.random() * 0.5 + 0.1,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}