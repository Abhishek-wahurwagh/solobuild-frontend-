"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function move(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };

      // Detect dark sections
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const isDark =
          el.closest("[data-cursor-dark]") !== null ||
          bg.includes("15, 23, 42") || // slate-900
          bg.includes("10, 15, 30");   // navy-950
        setDark(isDark);
      }

      // Detect interactive
      const interactive = (e.target as Element)?.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setHovering(!!interactive);
    }

    function loop() {
      // Smooth ring follow
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", move, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Don't render on server / touch devices at all
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const dotColor = dark ? "#ffffff" : "#2563eb";
  const ringColor = dark ? "rgba(255,255,255,0.25)" : "rgba(37,99,235,0.18)";

  return (
    <>
      {/* Primary dot — the SoloBuildAI sparkle mark */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-0 will-change-transform"
      >
        <svg
          width={hovering ? 22 : 18}
          height={hovering ? 22 : 18}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transition: "width 0.2s, height 0.2s",
            filter: dark ? "none" : "drop-shadow(0 0 3px rgba(37,99,235,0.35))",
          }}
        >
          {/* Sparkle / SoloBuildAI mark */}
          <path
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            fill={dotColor}
          />
        </svg>
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{
          width: hovering ? 38 : 30,
          height: hovering ? 38 : 30,
          border: `1.5px solid ${ringColor}`,
          borderRadius: "50%",
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
        }}
      />
    </>
  );
}
