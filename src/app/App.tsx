import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code2,
  Globe,
  ArrowRight,
  Download,
  ChevronDown,
  Menu,
  X,
  Zap,
  Rocket,
  MapPin,
  Lightbulb,
} from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiThreedotjs,
  SiNodedotjs, SiPython, SiGo, SiOpenjdk, SiDotnet, SiPhp,
  SiPostgresql, SiMongodb, SiRedis, SiMysql, SiPrisma, SiGraphql,
  SiDocker, SiKubernetes, SiGithubactions, SiTerraform, SiNginx,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import ThreeScene from "./components/ThreeScene";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  React: SiReact, "Next.js": SiNextdotjs, TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss, "Vue.js": SiVuedotjs, "Three.js": SiThreedotjs,
  "Node.js": SiNodedotjs, Python: SiPython, Go: SiGo,
  Java: SiOpenjdk, "C# / .NET": SiDotnet, PHP: SiPhp,
  PostgreSQL: SiPostgresql, MongoDB: SiMongodb, Redis: SiRedis,
  MySQL: SiMysql, Prisma: SiPrisma, GraphQL: SiGraphql,
  Docker: SiDocker, Kubernetes: SiKubernetes, AWS: FaAws,
  Terraform: SiTerraform, Nginx: SiNginx, "CI / CD": SiGithubactions,
};

// ─── Global styles ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @keyframes glitch-before {
    0%,100%  { clip-path: inset(50% 0 30% 0); transform: translate(-3px,  2px); }
    20%      { clip-path: inset(10% 0 70% 0); transform: translate( 3px, -2px); color:#00f5ff; }
    40%      { clip-path: inset(70% 0 10% 0); transform: translate(-2px,  3px); color:#a855f7; }
    60%      { clip-path: inset(30% 0 50% 0); transform: translate( 2px, -1px); }
    80%      { clip-path: inset(0%  0 90% 0); transform: translate(-1px,  2px); }
  }
  @keyframes glitch-after {
    0%,100%  { clip-path: inset(20% 0 60% 0); transform: translate( 3px, -2px); }
    25%      { clip-path: inset(60% 0 20% 0); transform: translate(-3px,  2px); color:#a855f7; }
    50%      { clip-path: inset(10% 0 80% 0); transform: translate( 2px,  3px); color:#00f5ff; }
    75%      { clip-path: inset(80% 0  5% 0); transform: translate(-2px, -2px); }
  }
  @keyframes float-y {
    0%,100% { transform: translateY(0px) rotate(var(--rot,0deg)); }
    50%     { transform: translateY(-18px) rotate(calc(var(--rot,0deg) + 5deg)); }
  }
  @keyframes pulse-glow {
    0%,100% { box-shadow: 0 0 12px #00f5ff30, 0 0 40px #00f5ff10; }
    50%     { box-shadow: 0 0 24px #00f5ff70, 0 0 80px #00f5ff25, 0 0 140px #00f5ff0a; }
  }
  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }
  @keyframes blink-cursor {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
  @keyframes wobble {
    0%,100% { transform: rotate(0deg) scale(1); }
    25%     { transform: rotate(0.8deg) scale(1.01); }
    75%     { transform: rotate(-0.8deg) scale(1.01); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes pop-in {
    0%   { transform: scale(0.6); opacity: 0; }
    70%  { transform: scale(1.08); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes icon-float {
    0%,100% { transform: translateY(0px) scale(1); }
    50%     { transform: translateY(-4px) scale(1.05); }
  }
  @keyframes breathe {
    0%,100% { opacity: var(--breathe-from, 0.5); }
    50%     { opacity: var(--breathe-to, 0.7); }
  }
  @keyframes glow-pulse {
    0%,100% { filter: brightness(0.5) drop-shadow(0 0 4px rgba(0,245,255,0.1)); }
    50%     { filter: brightness(0.55) drop-shadow(0 0 12px rgba(0,245,255,0.2)); }
  }
  @keyframes tilt-shake {
    0%,100% { transform: rotate(0deg); }
    20%     { transform: rotate(1deg); }
    40%     { transform: rotate(-1deg); }
    60%     { transform: rotate(0.5deg); }
    80%     { transform: rotate(-0.5deg); }
  }

  .glitch-wrap { position: relative; display: inline-block; }
  .glitch-wrap::before,
  .glitch-wrap::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    width: 100%;
  }
  .glitch-wrap::before {
    animation: glitch-before 4s infinite;
    opacity: 0.7;
    z-index: -1;
  }
  .glitch-wrap::after {
    animation: glitch-after 4s infinite 0.15s;
    opacity: 0.5;
    z-index: -2;
  }


  .float-anim { animation: float-y var(--dur,7s) ease-in-out infinite var(--delay,0s); }
  .pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
  .spin-slow  { animation: spin-slow var(--dur,18s) linear infinite; }
  .neon-logo img { filter: drop-shadow(0 0 8px #00f5ff) drop-shadow(0 0 20px #00f5ff60); }
  .nav-link:hover { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff80, 0 0 40px #00f5ff40; }
  .hire-btn:hover { box-shadow: 0 0 20px #00f5ff40, 0 0 40px #00f5ff20, inset 0 0 20px #00f5ff10; }
  .cursor-blink { animation: blink-cursor 1s step-end infinite; }
  .wobble-hover:hover { animation: wobble 0.4s ease; }
  .shimmer-text {
    background: linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.15) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  .pop-in-view { animation: pop-in 0.5s ease forwards; }
  .icon-bounce { animation: icon-float 4s ease-in-out infinite; }
  .breathe-glow { animation: breathe 4s ease-in-out infinite; }
  .tilt-shake-hover:hover { animation: tilt-shake 0.3s ease; }
  .stat-card:hover .stat-icon { animation: icon-float 0.6s ease infinite; }
  .stat-card:hover .stat-value { animation: pop-in 0.3s ease; }

  .grid-dots {
    background-image:
      linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .glass {
    background: rgba(255,255,255,0.025);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.07);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .glass:hover {
    border-color: rgba(0,245,255,0.35);
    box-shadow: 0 0 14px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.15), 0 0 80px rgba(0,245,255,0.06);
  }
  .glass-md {
    background: rgba(255,255,255,0.045);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.10);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .glass-md:hover {
    border-color: rgba(168,85,247,0.5);
    box-shadow: 0 0 14px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.15), 0 0 80px rgba(168,85,247,0.06);
  }
  html { scroll-behavior: smooth; font-family: 'Plus Jakarta Sans', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace !important; }
  h1, h2, h3, h4, h5, h6, .font-display { font-family: 'Space Grotesk', sans-serif; }

  ::-webkit-scrollbar { width: 3px; height: 3px; }
  ::-webkit-scrollbar-track { background: #050505; }
  ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.25); border-radius: 2px; }

  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes pill-glow {
    0%,100% { box-shadow: 0 0 15px #00f5ff25, 0 0 40px #00f5ff08; }
    50%     { box-shadow: 0 0 30px #00f5ff50, 0 0 80px #00f5ff15; }
  }
  @keyframes welcome-reveal {
    0%   { opacity: 0; transform: scale(0.85); letter-spacing: 12px; }
    100% { opacity: 1; transform: scale(1);   letter-spacing: 6px; }
  }

  .marquee-scroll { animation: marquee-scroll 40s linear infinite; }
  .marquee-pause:hover { animation-play-state: paused !important; }
  .mask-edges {
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }
  .scrollbar-thin { scrollbar-width: thin; scrollbar-color: rgba(0,245,255,0.2) transparent; }
  .scrollbar-thin::-webkit-scrollbar { height: 3px; }
  .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
  .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.2); border-radius: 2px; }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(0,245,255,0.4); }
  .pill-glow     { animation: pill-glow 2.5s ease-in-out infinite; }
  .welcome-reveal { animation: welcome-reveal 0.6s ease-out forwards; }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, name: "Smart Driving AI", category: "backend" as const,
    description: "A backend system designed to process sensor data from vehicle cameras. It focuses on object detection logic and logging driving events efficiently.",
    tech: ["Go", "Python", "OpenCV", "PostgreSQL"],
    grad: "from-blue-500/20 to-indigo-700/20", accent: "#3b82f6",
  },
  {
    id: 2, name: "Task Management Hub", category: "fullstack" as const,
    description: "A collaborative task management tool that handles real time updates. Built to manage team workflows with a focus on data synchronization.",
    tech: ["Next.js", "Node.js", "WebSockets", "MongoDB"],
    grad: "from-cyan-500/20 to-blue-700/20", accent: "#00f5ff",
  },
  {
    id: 3, name: "Portfolio Website", category: "frontend" as const,
    description: "A custom personal portfolio built to showcase my technical projects. Focuses on interactive animations and clean, responsive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    grad: "from-purple-500/20 to-pink-700/20", accent: "#a855f7",
  },
];

const SKILLS = {
  frontend: [
    { name: "React",        level: 95 }, { name: "Next.js",      level: 92 },
    { name: "TypeScript",   level: 93 }, { name: "Tailwind CSS",  level: 96 },
    { name: "Vue.js",       level: 80 }, { name: "Three.js",      level: 73 },
  ],
  backend: [
    { name: "Node.js",  level: 91 }, { name: "Python",  level: 88 },
    { name: "Go",       level: 84 }, { name: "Java",    level: 78 },
    { name: "C# / .NET",level: 75 }, { name: "PHP",     level: 72 },
  ],
  database: [
    { name: "PostgreSQL", level: 89 }, { name: "MongoDB",  level: 86 },
    { name: "Redis",      level: 83 }, { name: "MySQL",    level: 84 },
    { name: "Prisma",     level: 87 }, { name: "GraphQL",  level: 81 },
  ],
  devops: [
    { name: "Docker",     level: 86 }, { name: "Kubernetes", level: 75 },
    { name: "AWS",        level: 79 }, { name: "CI / CD",    level: 83 },
    { name: "Terraform",  level: 71 }, { name: "Nginx",      level: 77 },
  ],
};
const SKILL_COLORS = ["#00f5ff", "#a855f7", "#3b82f6", "#10b981", "#f97316", "#6366f1"];

const TIMELINE = [
  { year: "2024", title: "The Beginning", side: "left" as const,
    body: "Started my coding journey by learning the fundamentals of web development. Focused on HTML, CSS, and basic JavaScript to build simple, functional projects." },
  { year: "2025", title: "Expanding Skills", side: "right" as const,
    body: "Shifted to building more complex applications. Started learning React and Node.js while understanding how to connect frontends to backend services." },
  { year: "2026", title: "Present Day", side: "left" as const,
    body: "Currently focused on building fullstack applications, improving code quality, and exploring modern tools to create efficient web solutions." },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TiltCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s ease";
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s ease";
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}

function SkillRing({ level, color }: { level: number; color: string }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (level / 100) * circ;
  return (
    <svg width="88" height="88" className="-rotate-90" aria-hidden="true">
      <circle cx="44" cy="44" r={r} stroke="rgba(255,255,255,0.07)" strokeWidth="5" fill="none" />
      <motion.circle
        cx="44" cy="44" r={r}
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
        style={{ filter: `drop-shadow(0 0 5px ${color}90)` }}
      />
    </svg>
  );
}

function Particles() {
  const pts = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    s: Math.random() * 2 + 0.5,
    dur: Math.random() * 18 + 10,
    del: Math.random() * 8,
    op: Math.random() * 0.35 + 0.08,
    cyan: Math.random() > 0.4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pts.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: p.cyan ? "#00f5ff" : "#a855f7",
            opacity: p.op,
          }}
          animate={{
            y: [0, -70, -140, -70, 0],
            x: [0, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 40, 0],
            opacity: [p.op, p.op * 2, p.op * 0.5, p.op * 1.8, p.op],
          }}
          transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function useTyping(text: string, delay = 55) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, delay);
    return () => clearInterval(t);
  }, [text, delay]);
  return displayed;
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = ["About", "Skills", "Projects", "Journey"];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5" style={{ background: "rgba(5,5,5,0.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="neon-logo select-none flex items-center"
        >
          <img src="/logo-aris.png" alt="Logo" className="h-8 w-auto" />
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-7"
        >
          {links.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2 }}
              className="font-mono text-xs text-white/50 hover:text-[#00f5ff] transition-all tracking-widest uppercase nav-link"
            >
              {l}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-xs px-4 py-2 border border-[#00f5ff]/35 text-[#00f5ff] rounded-lg hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]/70 transition-all tracking-widest uppercase hire-btn"
          >
            Contact
          </motion.a>
        </motion.div>

        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/5 px-5 pb-5 flex flex-col gap-3 pt-3"
          style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-[#00f5ff] transition-all font-mono text-sm py-1.5 nav-link"
            >
              {l}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  const typed = useTyping("Fullstack Engineer • JavaScript • TypeScript • Go", 55);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-20 overflow-hidden"
    >
      {/* Full-screen grid layer at the very bottom */}
      <div className="absolute inset-0 pointer-events-none grid-dots" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00f5ff]/4 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-3xl" />
      </div>

      <ThreeScene />

      <div className="relative flex-1 flex flex-col lg:flex-row w-full">
        {/* Left: text */}
        <div className="relative z-10 w-full lg:w-1/2 px-5 lg:pl-40 lg:pr-12 py-16 lg:py-0 flex flex-col justify-center order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-8 h-px bg-[#00f5ff]" />
            <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl sm:text-8xl lg:text-9xl font-display font-extrabold tracking-tight leading-[1.15] mb-6 pt-4"
          >
            <span
              className="glitch-wrap text-white"
              data-text="ARIS"
            >
              ARIS
            </span>
            <br />
            <span
              className="glitch-wrap font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#3b82f6] to-[#a855f7] pr-[0.15em]"
              data-text="FIRMANSYAH"
            >
              FIRMANSYAH
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="font-mono text-[#00f5ff]/75 text-lg mb-8 min-h-[28px]"
          >
            {typed}
            <span className="cursor-blink text-[#00f5ff]">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/45 text-xl max-w-lg leading-relaxed mb-10"
          >
            I write clean, maintainable code and build web applications that
            work well, from responsive frontends to reliable backend services.
            I focus on practical solutions, not trends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-[#00f5ff] text-[#050505] font-bold rounded-xl text-sm hover:bg-[#00f5ff]/90 hover:shadow-[0_0_36px_#00f5ff50] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 font-medium rounded-xl text-sm hover:border-[#a855f7]/60 hover:text-[#a855f7] hover:shadow-[0_0_24px_#a855f720] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-14 flex items-center gap-1.5 text-white/25 font-mono text-xs"
          >
            <ChevronDown size={13} className="animate-bounce" />
            scroll down
          </motion.div>
        </div>

        {/* Right: photo */}
        <div className="relative w-full lg:w-1/2 order-1 lg:order-2 flex-shrink-0 overflow-hidden h-[50vh] lg:h-screen group">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="absolute inset-0 bottom-0"
          >
            <img
              src="/foto-profil.png"
              alt="Profile"
              className="w-full h-full object-cover object-[center_45%] pointer-events-none brightness-[0.5] contrast-[0.95] saturate-[0.85] transition-[filter] duration-300 group-hover:brightness-[1.0] group-hover:contrast-[1.0] group-hover:saturate-[1.0] breathe-glow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ to, suffix = "", from = 0 }: { to: number; suffix?: string; from?: number }) {
  const [val, setVal] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const raf = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const e = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(from + (to - from) * e));
            if (t < 1) requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, from]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function About() {
  const strengths = [
    { icon: Zap,       label: "Fast Learner",       desc: "Pick up new languages and frameworks quickly through docs", color: "#00f5ff" },
    { icon: Code2,     label: "Clean Code",         desc: "Write readable, maintainable code that others can work with", color: "#a855f7" },
    { icon: Globe,     label: "Full Stack",         desc: "Handle both frontend UI and backend logic comfortably",      color: "#3b82f6" },
    { icon: Lightbulb, label: "Problem Solver",     desc: "Debug systematically and find practical solutions",          color: "#10b981" },
  ];
  const stats = [
    { value: 4, label: "Core Languages",   color: "#00f5ff", suffix: "+" },
    { value: 10, label: "Projects Built",    color: "#a855f7", suffix: "+" },
    { value: 2,  label: "Years Coding",      color: "#3b82f6", suffix: "+" },
    { value: 8,  label: "Technologies Used", color: "#10b981", suffix: "+" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <ThreeScene variant="torus" particleCount={200} />
      <div className="absolute inset-0 pointer-events-none grid-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-[#a855f7]/4 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-[450px] h-[450px] rounded-full bg-[#3b82f6]/5 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f7]/3 to-transparent pointer-events-none" />
      <div className="px-5 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
           <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase shimmer-text">01 / About</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] text-white mt-2 pt-2">
            About{" "}
            <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#3b82f6] pr-[0.15em]">
              Myself
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06, delayChildren: 0.08 }}
          className="grid lg:grid-cols-12 gap-10 items-start"
        >
          {/* Bio + strengths — 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <p className="text-white/55 text-lg leading-relaxed mb-5">
              I'm a{" "}
              <span className="font-serif italic text-white/80">self taught</span> fullstack developer. I learn by
              building stuff, reading docs, breaking things, and fixing them. I write{" "}
              <span className="font-serif italic text-white/80">clean, readable code</span> and
              build applications that solve real problems without over engineering.
            </p>
            <p className="text-white/55 text-lg leading-relaxed mb-6">
              I work across the stack: responsive frontends, REST APIs, database design,
              and deployment. Everything I build is driven by{" "}
              <span className="font-serif italic text-white/80">what works</span>, not what sounds
              impressive on paper.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <TiltCard className="relative glass p-5 rounded-xl cursor-default wobble-hover h-full group overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}08, transparent 60%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        padding: "1px",
                        background: `linear-gradient(135deg, ${s.color}40, transparent 60%)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                    <s.icon size={18} style={{ color: s.color, filter: `drop-shadow(0 0 6px ${s.color}80)` }} className="mb-2 icon-bounce" />
                    <p className="text-white text-base font-semibold">{s.label}</p>
                    <p className="text-white/38 text-sm mt-0.5 leading-tight">{s.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dense info widgets — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Current Focus */}
            <div className="relative border border-slate-800 bg-slate-900/50 backdrop-blur rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#a855f7]/5 blur-2xl pointer-events-none" />
              <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">Current Focus</p>
              <ul className="space-y-3">
                {[
                  { text: "Building fullstack apps with Go and React", color: "#00f5ff" },
                  { text: "Improving architecture and code quality",   color: "#a855f7" },
                  { text: "Learning cloud deployment and DevOps",      color: "#3b82f6" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}80` }} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="relative border border-slate-800 bg-slate-900/50 backdrop-blur rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#3b82f6]/5 blur-2xl pointer-events-none" />
              <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">Quick Stats</p>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-white" style={{ color: s.color }}>
                      <AnimatedNumber to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
                <span className="font-mono text-xs text-green-400/70">Available for freelance</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const [tab, setTab] = useState<keyof typeof SKILLS>("frontend");
  const tabs = Object.keys(SKILLS) as (keyof typeof SKILLS)[];
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <ThreeScene variant="icosahedron" particleCount={200} />
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] rounded-full bg-[#00f5ff]/4 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#3b82f6]/5 blur-3xl" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent" />

      <div className="px-5 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase">02 / Skills</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] text-white mt-2 pt-2">
            Tech{" "}
            <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#3b82f6] pr-[0.15em]">
              Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main content — 8 cols */}
          <div className="lg:col-span-8">
            {/* Tab strip */}
            <div className="flex flex-wrap gap-3 mb-10">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`font-mono text-xs px-5 py-2 rounded-full capitalize tracking-wider transition-all duration-200 ${
                    tab === t
                      ? "bg-[#00f5ff] text-[#050505] font-bold shadow-[0_0_22px_#00f5ff45]"
                      : "glass border border-white/10 text-white/45 hover:text-white/75 hover:border-white/20"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Skill cards - infinite marquee */}
             <motion.div
               key={tab}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.35, ease: "easeOut" }}
             >
               <div className="overflow-hidden mask-edges py-8">
                 <div className="flex w-max marquee-scroll marquee-pause">
                   <div className="flex flex-shrink-0">
                     {SKILLS[tab].map((skill, i) => {
                       const color = SKILL_COLORS[i % SKILL_COLORS.length];
                       const tier = skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Proficient";
                       const IconComp = SKILL_ICONS[skill.name];
                       return (
                           <motion.div
                             key={skill.name}
                             initial={{ opacity: 0, y: 16, scale: 0.95 }}
                             animate={{ opacity: 1, y: 0, scale: 1 }}
                             transition={{ delay: i * 0.04, duration: 0.3 }}
                             className="flex-shrink-0 mr-8" data-card
                           >
                             <TiltCard className="glass py-10 px-6 rounded-2xl cursor-default flex flex-col items-center text-center hover:border-white/15 transition-colors w-[190px]">
                               <div className="relative mb-4">
                                 <SkillRing level={skill.level} color={color} />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                   {IconComp ? (
                                     <IconComp className="w-7 h-7" style={{ color }} />
                                   ) : (
                                     <span className="font-mono text-sm font-bold" style={{ color }}>{skill.level}%</span>
                                   )}
                                 </div>
                               </div>
                               <p className="text-white text-base font-semibold leading-snug mb-1">{skill.name}</p>
                               <p className="font-mono text-sm font-bold mb-3" style={{ color }}>{skill.level}%</p>
                               <span className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>{tier}</span>
                             </TiltCard>
                           </motion.div>
                       );
                     })}
                   </div>
                   <div className="flex flex-shrink-0">
                     {SKILLS[tab].map((skill, i) => {
                       const color = SKILL_COLORS[i % SKILL_COLORS.length];
                       const tier = skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Proficient";
                       const IconComp = SKILL_ICONS[skill.name];
                       return (
                           <motion.div
                             key={`dup-${skill.name}`}
                             initial={{ opacity: 0, y: 16, scale: 0.95 }}
                             animate={{ opacity: 1, y: 0, scale: 1 }}
                             transition={{ delay: i * 0.04 + 0.15, duration: 0.3 }}
                             className="flex-shrink-0 mr-8" data-card
                           >
                             <TiltCard className="glass py-10 px-6 rounded-2xl cursor-default flex flex-col items-center text-center hover:border-white/15 transition-colors w-[190px]">
                               <div className="relative mb-4">
                                 <SkillRing level={skill.level} color={color} />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                   {IconComp ? (
                                     <IconComp className="w-7 h-7" style={{ color }} />
                                   ) : (
                                     <span className="font-mono text-sm font-bold" style={{ color }}>{skill.level}%</span>
                                   )}
                                 </div>
                               </div>
                               <p className="text-white text-base font-semibold leading-snug mb-1">{skill.name}</p>
                               <p className="font-mono text-sm font-bold mb-3" style={{ color }}>{skill.level}%</p>
                               <span className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>{tier}</span>
                             </TiltCard>
                           </motion.div>
                       );
                     })}
                   </div>
                 </div>
               </div>
             </motion.div>

            {/* Language pill cloud */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-2.5 justify-center"
            >
              {["JavaScript", "TypeScript", "Python", "Go", "Java", "C#", "PHP", "Rust", "SQL", "GraphQL", "Bash", "YAML"].map(
                (lang, i) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 text-white/40 hover:text-white/70 hover:border-[#00f5ff]/35 transition-all cursor-default"
                  >
                    {lang}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>

          {/* Sidebar — 4 cols */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            {/* Stack Overview */}
            <div className="border border-slate-800 bg-slate-900/50 backdrop-blur rounded-xl p-6">
              <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">Stack Overview</p>
              <div className="space-y-3">
                {tabs.map((t) => {
                  const count = SKILLS[t].length;
                  return (
                    <div key={t} className="flex items-center justify-between pb-2 border-b border-slate-800 last:border-b-0 last:pb-0">
                      <span className="text-sm text-white/60 capitalize">{t}</span>
                      <span className="font-mono text-xs text-white/30">{count} tools</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Proficiency Distribution */}
            <div className="border border-slate-800 bg-slate-900/50 backdrop-blur rounded-xl p-6">
              <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">Proficiency</p>
              <div className="space-y-4">
                {[
                  { label: "Expert", range: "90 100%", color: "#00f5ff", pct: 25 },
                  { label: "Advanced", range: "80 89%", color: "#a855f7", pct: 33 },
                  { label: "Proficient", range: "70 79%", color: "#3b82f6", pct: 42 },
                ].map((tier) => (
                  <div key={tier.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white/60">{tier.label}</span>
                      <span className="font-mono text-[11px] text-white/30">{tier.range}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${tier.pct}%`, background: tier.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "fullstack">("all");
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 translate-y-[-60px]">
        <ThreeScene variant="octahedron" particleCount={200} />
      </div>
      <div className="absolute inset-0 pointer-events-none grid-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/4 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00f5ff]/4 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f6]/3 to-transparent pointer-events-none" />

      <div className="px-5 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase">03 / Projects</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] text-white mt-2 pt-2">
            Projects{" "}
            <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00f5ff] pr-[0.15em]">
              I've Built
            </span>
          </h2>
        </motion.div>

        {/* Filter strip */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(["all", "frontend", "backend", "fullstack"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm px-5 py-2 rounded-full capitalize transition-all duration-200 ${
                filter === f
                  ? "bg-[#a855f7] text-white font-semibold shadow-[0_0_22px_#a855f745]"
                  : "glass border border-white/10 text-white/45 hover:text-white hover:border-white/22"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
            >
              <TiltCard className="glass rounded-2xl overflow-hidden group hover:border-white/15 transition-colors h-full flex flex-col">
                {/* Thumbnail */}
                <div className={`relative h-44 bg-gradient-to-br ${proj.grad} flex items-center justify-center overflow-hidden`}>
                  <span
                    className="text-[5rem] font-black opacity-12 select-none leading-none"
                    style={{ color: proj.accent }}
                  >
                    {proj.name[0]}
                  </span>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                    style={{ background: `${proj.accent}10` }}
                  >
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <Github size={12} /> Source
                    </a>
                  </div>
                  {/* Category badge */}
                  <div
                    className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full capitalize backdrop-blur-sm"
                    style={{ color: proj.accent, background: `${proj.accent}20`, border: `1px solid ${proj.accent}40` }}
                  >
                    {proj.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2" style={{ color: proj.accent }}>
                    {proj.name}
                  </h3>
                  <p className="text-white/48 text-base leading-relaxed mb-4 flex-1">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-white/10 text-white/38"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 translate-y-[-60px]">
        <ThreeScene variant="torusKnot" particleCount={200} />
      </div>
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-[500px] h-[500px] rounded-full bg-[#00f5ff]/4 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/5 w-[450px] h-[450px] rounded-full bg-[#a855f7]/5 blur-3xl" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/28 to-transparent" />

      <div className="px-5 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase">04 / Journey</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] text-white mt-2 pt-2">
              My{" "}
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a855f7] pr-[0.15em]">
                Timeline
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/45 via-[#a855f7]/30 to-transparent hidden md:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: item.side === "left" ? -36 : 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="md:w-[calc(50%-2.5rem)] w-full">
                  <TiltCard className="glass p-5 rounded-2xl cursor-default">
                    <p className="font-mono text-[#00f5ff] text-xs mb-2 md:hidden">{item.year}</p>
                    <h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3>
                    <p className="text-white/48 text-sm leading-relaxed">{item.body}</p>
                  </TiltCard>
                </div>

                {/* Center dot */}
                <div className="hidden md:block relative z-10 flex-shrink-0">
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-[#00f5ff]"
                    style={{ boxShadow: "0 0 14px #00f5ff70" }}
                  />
                </div>

                {/* Year label */}
                <div
                  className={`hidden md:flex md:w-[calc(50%-2.5rem)] ${
                    item.side === "right" ? "justify-start" : "justify-end"
                  }`}
                >
                  <span
                    className="font-mono text-2xl font-black"
                    style={{
                      color: "#00f5ff",
                      textShadow: "0 0 8px #00f5ff, 0 0 20px #00f5ff80, 0 0 40px #00f5ff40, 0 0 80px #00f5ff20",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      toast.error("Please enter a valid email address.", {
        style: { background: "#1a1a2e", border: "1px solid #ef444480", color: "#f87171" },
      });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        "service_donudbj",
        "template_45w1gxj",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "vvbKVjVVkq_zwROe8"
      );
      setForm({ name: "", email: "", message: "" });
      setShowSuccess(true);
    } catch {
      toast.error("Failed to send message. Please try again later.", {
        style: { background: "#1a1a2e", border: "1px solid #ef444480", color: "#f87171" },
      });
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: Github,   label: "GitHub",   color: "#e2e8f0", url: "https://github.com/arisfir016" },
    { icon: Linkedin, label: "LinkedIn", color: "#0a91d1", url: "https://www.linkedin.com/in/arisfir016" },
    { icon: Twitter,  label: "Twitter",  color: "#1d9bf0", url: "#" },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <ThreeScene variant="dodecahedron" particleCount={200} />
      <div className="absolute inset-0 pointer-events-none grid-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] rounded-full bg-[#00f5ff]/4 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#a855f7]/5 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/28 to-transparent" />

      <div className="px-5 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.07 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <span className="font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase">05 / Contact</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] text-white mt-2 pt-2">
              Let's{" "}
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a855f7] pr-[0.15em]">
                Connect
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-12 gap-10"
          >
          {/* Info — 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6"
          >
            <p className="text-white/52 text-lg leading-relaxed mb-6">
              If you have a project in mind, need help with a development task, or just want to
              chat about tech, feel free to drop me a message. I'm always happy to discuss new
              opportunities or exchange ideas.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: Mail,    label: "Email",        value: "arisfir016@gmail.com",      color: "#00f5ff" },
                { icon: MapPin,  label: "Location",     value: "Sragen, Jawa Tengah, Indonesia",           color: "#a855f7" },
                { icon: Code2,   label: "Available for", value: "Open for freelance projects and full time roles", color: "#3b82f6" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}
                  >
                    <item.icon size={13} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-white/28 text-[10px] tracking-[0.2em] uppercase">{item.label}</p>
                    <p className="text-white/72 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <TiltCard key={s.label}>
                  <motion.a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/10 hover:border-white/28 transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={15} style={{ color: s.color }} />
                  </motion.a>
                </TiltCard>
              ))}
            </div>
          </motion.div>

          {/* Form — 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-md p-6 rounded-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {[
                  { key: "name" as const,  label: "Name",  ph: "Aris Firmansyah",     type: "text"  },
                  { key: "email" as const, label: "Email", ph: "alex@company.com",  type: "email" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block font-mono text-white/38 text-[10px] uppercase tracking-[0.2em] mb-1.5">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#00f5ff]/50 transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block font-mono text-white/38 text-[10px] uppercase tracking-[0.2em] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#00f5ff]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-[#00f5ff] to-[#3b82f6] text-[#050505] font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_36px_#00f5ff40] hover:-translate-y-0.5 transition-all duration-200"
              >
                {sending ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                ) : (
                  <><Rocket size={15} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-[90%] max-w-sm p-10 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(15,15,30,0.95) 100%)",
              border: "1px solid rgba(0,245,255,0.15)",
              boxShadow: "0 0 60px rgba(0,245,255,0.08), 0 0 120px rgba(168,85,247,0.04)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Green checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 14, stiffness: 260, delay: 0.15 }}
              className="mx-auto mb-5 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.3)" }}
            >
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />
              </motion.svg>
            </motion.div>

            {/* SUCCESS */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-sm tracking-[0.3em] mb-2"
              style={{ color: "#22c55e" }}
            >
              SUCCESS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/55 text-sm leading-relaxed mb-7"
            >
              Your message has been sent! I'll get back to you as soon as possible.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowSuccess(false)}
              className="font-mono text-xs tracking-widest uppercase px-8 py-2.5 rounded-xl transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#22c55e",
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function Footer() {
  const links = ["About", "Skills", "Projects", "Journey", "Contact"];
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <span className="neon-logo flex items-center">
          <img src="/logo-aris.png" alt="Logo" className="h-6 w-auto" />
        </span>
        <p className="font-mono text-white/20 text-xs">
          © 2026 Aris Firmansyah · React + TypeScript + Tailwind
        </p>
        <div className="flex gap-5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-white/22 text-xs hover:text-white/55 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Loading Screen ────────────────────────────────────────────────────────────
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "welcome" | "exit">("loading");

  useEffect(() => {
    const duration = 1100;
    const interval = 16;
    const totalSteps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const pct = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setPhase("welcome");

        setTimeout(() => {
          setPhase("exit");
          setTimeout(onComplete, 400);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
      animate={phase === "exit" ? { opacity: 0, y: -40 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="marquee-scroll flex text-[clamp(4rem,16vw,12rem)] font-black text-white/[0.035] whitespace-nowrap leading-none tracking-tight">
          <span>FULLSTACK ENGINEER • JAVASCRIPT • TYPESCRIPT • GO&nbsp;&nbsp;&nbsp;</span>
          <span>FULLSTACK ENGINEER • JAVASCRIPT • TYPESCRIPT • GO&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* Silhouette logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/logo-aris.png"
          alt=""
          className="w-[clamp(200px,60vw,500px)] h-auto opacity-[0.04]"
          style={{ filter: "blur(4px)" }}
        />
      </div>

      {/* Center pill */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div
          className="pill-glow flex items-center justify-center min-w-[200px] px-10 py-4 rounded-full border"
          style={{
            background: "linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(168,85,247,0.06) 100%)",
            borderColor: "rgba(0,245,255,0.15)",
            backdropFilter: "blur(6px)",
          }}
        >
          {phase === "welcome" ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "12px" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "6px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-black tracking-wider"
              style={{
                background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } as React.CSSProperties}
            >
              WELCOME
            </motion.span>
          ) : (
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white/80 tabular-nums">
              {progress}%
            </span>
          )}
        </div>

        {/* Subtle loading bar under pill */}
        {phase === "loading" && (
          <div className="w-48 h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #00f5ff, #a855f7)",
                width: `${progress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}
      </div>

      {/* Bottom status hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 font-mono text-[10px] text-white/15 tracking-[0.25em] uppercase"
      >
        {phase === "welcome" ? "ready" : "initializing..."}
      </motion.p>
    </motion.div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#050505] text-foreground min-h-screen overflow-x-hidden"
      >
        <style>{GLOBAL_CSS}</style>
        <Nav open={navOpen} setOpen={setNavOpen} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" },
          }}
        />
      </motion.div>
    </>
  );
}
