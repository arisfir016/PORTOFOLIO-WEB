import { useEffect, useRef } from "react";

const COLORS = [
  [0, 245, 255],   // cyan
  [168, 85, 247],  // purple
  [255, 80, 120],  // pink
  [59, 130, 246],  // blue
  [16, 185, 129],  // green
  [249, 115, 22],  // orange
  [236, 72, 153],  // hot pink
  [255, 200, 50],  // gold
];

export default function ProjectStars() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, id = 0;
    let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5;

    interface Star {
      x: number; y: number; r: number;
      base: number; speed: number; phase: number;
      color: [number, number, number];
      depth: number;
    }

    let stars: Star[] = [];

    const resize = () => {
      w = cvs!.width = window.innerWidth;
      h = cvs!.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        base: Math.random() * 0.4 + 0.15,
        speed: Math.random() * 0.004 + 0.001,
        phase: Math.random() * Math.PI * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        depth: Math.random() * 3 + 0.5,
      }));
    };
    resize();

    const handleMouse = (e: MouseEvent) => {
      mx = e.clientX / w;
      my = e.clientY / h;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const draw = (t: number) => {
      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;

      const ox = (tx - 0.5) * 25;
      const oy = (ty - 0.5) * 25;

      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = s.base + Math.sin(t * s.speed + s.phase) * 0.15;
        if (alpha < 0.05) continue;

        const px = s.x + ox * s.depth;
        const py = s.y + oy * s.depth;
        const [r, g, b] = s.color;

        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${Math.max(0, Math.min(1, alpha))})`;
        ctx!.fill();

        // Glow on brighter blink
        if (alpha > 0.35) {
          ctx!.beginPath();
          ctx!.arc(px, py, s.r * 3, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${r},${g},${b},${alpha * 0.1})`;
          ctx!.fill();
        }
      }
      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
