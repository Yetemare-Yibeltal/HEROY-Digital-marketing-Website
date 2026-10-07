"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(updateCursor);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [role='button']")));
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseLeave);

    animationFrame = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="hidden lg:block fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
    >
      <div
        className="rounded-full border border-primary/60"
        style={{
          width: hovering ? 48 : 24,
          height: hovering ? 48 : 24,
          backgroundColor: hovering
            ? "rgba(124,92,255,0.12)"
            : "transparent",
          transition: "width 120ms ease-out, height 120ms ease-out, background-color 120ms ease-out",
        }}
      />

      <div
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
