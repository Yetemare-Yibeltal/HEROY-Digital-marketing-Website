"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button']");
      setHovering(Boolean(isInteractive));
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="rounded-full border border-primary/60 transition-all duration-200 ease-out"
        style={{
          width: hovering ? 48 : 24,
          height: hovering ? 48 : 24,
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          backgroundColor: hovering ? "rgba(124,92,255,0.12)" : "transparent",
        }}
      />
      <div
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}