import { useEffect, useRef } from "react";

const NEON_COLORS = [
  [0, 245, 255],   // cyan
  [168, 85, 247],  // purple
  [255, 107, 107], // pink/red
  [59, 130, 246],  // blue
  [16, 185, 129],  // green
  [249, 115, 22],  // orange
  [236, 72, 153],  // hot pink
  [34, 211, 238],  // sky
];

interface Star {
  x: number; y: number; r: number;
  base: number; speed: number; phase: number;
  color: [number, number, number];
}

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, stars: Star[] = [], id = 0;

    const resize = () => {
      if (!cvs) return;
      w = cvs.width = window.innerWidth;
      h = cvs.height = window.innerHeight;
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        base: Math.random() * 0.4 + 0.15,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
        color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
      }));
    };
    resize();

    const draw = (t: number) => {
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = s.base + Math.sin(t * s.speed + s.phase) * 0.12;
        const [r, g, b] = s.color;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${Math.max(0, Math.min(1, alpha))})`;
        ctx!.fill();
      }
      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
