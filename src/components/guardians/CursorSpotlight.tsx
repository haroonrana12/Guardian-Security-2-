import { useEffect, useState } from "react";

export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
      style={{
        background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, oklch(0.745 0.105 85 / 0.10), transparent 60%)`,
        transition: "background 80ms linear",
      }}
    />
  );
}
