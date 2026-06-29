import { useRef, useEffect } from "react";
import * as THREE from "three";

const GEOM_MAP: Record<string, () => THREE.BufferGeometry> = {
  torus: () => new THREE.TorusGeometry(1.2, 0.35, 16, 40),
  icosahedron: () => new THREE.IcosahedronGeometry(1.1, 0),
  octahedron: () => new THREE.OctahedronGeometry(1.8),
  torusKnot: () => new THREE.TorusKnotGeometry(0.9, 0.3, 48, 6),
  dodecahedron: () => new THREE.DodecahedronGeometry(0.9),
};

interface Props {
  variant?: "torus" | "icosahedron" | "octahedron" | "torusKnot" | "dodecahedron";
  particleCount?: number;
  lowQuality?: boolean;
}

export default function ThreeScene({ variant, particleCount = 400, lowQuality }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const actualCount = lowQuality || isMobile ? Math.min(particleCount, 60) : particleCount;
    const dpr = (lowQuality || isMobile) ? Math.min(window.devicePixelRatio, 1.2) : Math.min(window.devicePixelRatio, 2);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !lowQuality });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(dpr);
    container.appendChild(renderer.domElement);

    const isHero = !variant;
    const group = new THREE.Group();
    if (isHero && !isMobile) group.position.x = -2.5;
    scene.add(group);

    const geoConfigs = variant
      ? [{ make: GEOM_MAP[variant], color: [0x00f5ff, 0xa855f7, 0x3b82f6, 0x00f5ff][Math.floor(Math.random() * 4)], opacity: 0.08 }]
      : [
          { make: () => new THREE.TorusGeometry(1.4, 0.4, 18, 52), color: 0x00f5ff, opacity: 0.06 },
          { make: () => new THREE.IcosahedronGeometry(1.2, 0), color: 0xa855f7, opacity: 0.09 },
          { make: () => new THREE.OctahedronGeometry(1.1), color: 0x3b82f6, opacity: 0.12 },
          { make: () => new THREE.TorusKnotGeometry(1.0, 0.35, 64, 8), color: 0x00f5ff, opacity: 0.15 },
        ];

    const basePositions: { x: number; y: number; z: number }[] = [];
    const items: { mesh: THREE.Mesh; speed: number; rotX: number; rotY: number; floatOffset: number }[] = [];

    geoConfigs.forEach((cfg, i) => {
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        wireframe: true,
        transparent: true,
        opacity: cfg.opacity,
      });
      const mesh = new THREE.Mesh(cfg.make(), mat);
      if (variant) {
        mesh.position.set(0, 0, 0);
        basePositions.push({ x: 0, y: 0, z: 0 });
        mesh.scale.setScalar(1.1);
      } else {
        const angle = (i / geoConfigs.length) * Math.PI * 2;
        const px = Math.cos(angle) * 3.2;
        const py = Math.sin(angle) * 2.5 - 0.3;
        const pz = i * 0.5 - 1;
        mesh.position.set(px, py, pz);
        basePositions.push({ x: px, y: py, z: pz });
        const s = i === 3 ? 0.95 : 0.9 + i * 0.15;
        mesh.scale.setScalar(s);
      }
      group.add(mesh);
      items.push({
        mesh,
        speed: 0.15 + i * 0.08,
        rotX: Math.random() * 0.008,
        rotY: Math.random() * 0.008,
        floatOffset: Math.random() * Math.PI * 2,
      });
    });

    // --- Particles ---
    const pCount = variant ? Math.min(actualCount, 100) : actualCount;
    const spread = variant ? 8 : 16;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pCount * 3);
    const particleBasePos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) {
      const v = (Math.random() - 0.5) * spread;
      positions[i] = v;
      particleBasePos[i] = v;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: variant ? 0.02 : 0.03,
      transparent: true,
      opacity: variant ? 0.08 : 0.12,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Cursor glow ---
    const glowGeo = new THREE.SphereGeometry(0.15, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: lowQuality ? 0.1 : 0.25 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(0, 0, 2);
    scene.add(glow);

    // --- Mouse / Touch tracking ---
    let mouseX = 0, mouseY = 0, targetMX = 0, targetMY = 0;
    const handlePointer = (x: number, y: number) => {
      targetMX = (x / window.innerWidth) * 2 - 1;
      targetMY = -(y / window.innerHeight) * 2 + 1;
    };
    const handleMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handlePointer(touch.clientX, touch.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // --- Resize ---
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // --- Visibility tracking ---
    let visible = true;
    const visObs = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    visObs.observe(container);

    // --- Animate ---
    let time = 0;
    let animId = 0;
    const clock = new THREE.Clock();
    const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!visible) return;
      const dt = clock.getDelta();
      time += dt;

      mouseX += (targetMX - mouseX) * 0.05;
      mouseY += (targetMY - mouseY) * 0.05;

      items.forEach((item, i) => {
        item.mesh.rotation.x += item.rotX + dt * 0.15 + mouseY * 0.002;
        item.mesh.rotation.y += item.rotY + dt * 0.25 + mouseX * 0.004;
        item.mesh.position.y += Math.sin(time * item.speed + item.floatOffset) * 0.001;

        const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        const pulse = 1 + (1 - dist) * 0.04 * Math.max(0, 1 - dist);
        const base = variant ? 1.1 : i === 3 ? 0.95 : 0.9 + i * 0.15;
        item.mesh.scale.setScalar(base + pulse * 0.03);

        const baseP = basePositions[i];
        item.mesh.position.x = baseP.x + mouseX * (variant ? 0.15 : 0.25);
        item.mesh.position.y = baseP.y + mouseY * (variant ? 0.12 : 0.2);
      });

      if (isHero) {
        group.rotation.x += (mouseY * 0.15 - group.rotation.x) * 0.015;
        group.rotation.y += (mouseX * 0.25 - group.rotation.y) * 0.015;
      }

      glow.position.x = mouseX * 4;
      glow.position.y = mouseY * 3;
      glow.position.z = 1.5;
      glow.material.opacity = 0.15 + (1 - Math.sqrt(mouseX * mouseX + mouseY * mouseY) / 1.5) * 0.2;

      const particlePos = posAttr.array;
      for (let i = 0; i < pCount; i++) {
        const i3 = i * 3;
        particlePos[i3] = particleBasePos[i3] + mouseX * 0.3 + Math.sin(time * 0.2 + i) * 0.05;
        particlePos[i3 + 1] = particleBasePos[i3 + 1] + mouseY * 0.2 + Math.cos(time * 0.15 + i * 1.3) * 0.05;
        particlePos[i3 + 2] = particleBasePos[i3 + 2] + Math.sin(time * 0.1 + i * 0.7) * 0.05;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      visObs.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, [variant, particleCount, lowQuality]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
