import { useRef, useEffect } from "react";

export default function AboutBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let mx = 0.5, my = 0.5, gx = 0.5, gy = 0.5;
    let pending = false;

    const tick = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      el.style.background = `radial-gradient(500px at ${gx * 100}% ${gy * 100}%, rgba(0,245,255,0.06), transparent 70%)`;
      if (Math.abs(gx - mx) > 0.001 || Math.abs(gy - my) > 0.001) {
        requestAnimationFrame(tick);
      } else {
        pending = false;
      }
    };

    const move = (e: MouseEvent) => {
      const r = el.parentElement?.getBoundingClientRect();
      if (!r) return;
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
      if (!pending) { pending = true; requestAnimationFrame(tick); }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }} />;
}
