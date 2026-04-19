import { useState, useEffect } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    }

    function onEnter() {
      setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    function onOverInteractive(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      setHovering(!!interactive);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOverInteractive, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOverInteractive);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof matchMedia !== "undefined" && matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[200]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      {/* Outer ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          top: hovering ? -24 : -16,
          left: hovering ? -24 : -16,
          border: hovering ? "2px solid #f59e0b" : "1.5px solid rgba(245, 158, 11, 0.5)",
          boxShadow: hovering
            ? "0 0 12px rgba(245, 158, 11, 0.4), inset 0 0 8px rgba(245, 158, 11, 0.1)"
            : "0 0 8px rgba(245, 158, 11, 0.15)",
          transition: "all 0.2s ease-out",
        }}
      />
      {/* Inner dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: hovering ? 0 : 4,
          height: hovering ? 0 : 4,
          top: hovering ? 0 : -2,
          left: hovering ? 0 : -2,
          backgroundColor: "#f59e0b",
          boxShadow: "0 0 6px rgba(245, 158, 11, 0.6)",
          transition: "all 0.2s",
        }}
      />
    </div>
  );
}
