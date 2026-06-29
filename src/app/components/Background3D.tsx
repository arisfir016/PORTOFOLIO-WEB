import { useRef, useEffect, memo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const knotRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const particleCount = 300;
  const basePos = useRef(new Float32Array(particleCount * 3));
  useEffect(() => {
    for (let i = 0; i < particleCount * 3; i++) {
      basePos.current[i] = (Math.random() - 0.5) * 20;
    }
  }, []);

  useFrame((state, dt) => {
    const m = mouse.current;
    m.tx += (m.x - m.tx) * 0.04;
    m.ty += (m.y - m.ty) * 0.04;
    const mx = m.tx;
    const my = m.ty;

    if (knotRef.current) {
      knotRef.current.rotation.x += dt * 0.2 + my * 0.005;
      knotRef.current.rotation.y += dt * 0.3 + mx * 0.008;
      knotRef.current.position.x = mx * 0.8;
      knotRef.current.position.y = -my * 0.6;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.x += dt * 0.1 + my * 0.003;
      sphereRef.current.rotation.y += dt * 0.15 + mx * 0.005;
      sphereRef.current.position.x = mx * 0.5;
      sphereRef.current.position.y = -my * 0.4;
    }

    if (particlesRef.current) {
      const arr = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        arr[i3] =
          basePos.current[i3] +
          mx * 0.4 +
          Math.sin(state.elapsedTime * 0.15 + i) * 0.08;
        arr[i3 + 1] =
          basePos.current[i3 + 1] +
          my * 0.3 +
          Math.cos(state.elapsedTime * 0.12 + i * 1.3) * 0.08;
        arr[i3 + 2] =
          basePos.current[i3 + 2] +
          Math.sin(state.elapsedTime * 0.08 + i * 0.7) * 0.05;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00f5ff" />
      <pointLight position={[-5, -5, 3]} intensity={0.4} color="#a855f7" />

      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.4}>
        <mesh ref={knotRef} scale={1.6}>
          <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
          <MeshDistortMaterial
            color="#00f5ff"
            emissive="#00f5ff"
            emissiveIntensity={0.15}
            transparent
            opacity={0.5}
            wireframe
            distort={0.15}
            speed={2}
            toneMapped={false}
          />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.3}>
        <mesh ref={sphereRef} scale={1.8}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      </Float>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={basePos.current}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#00f5ff"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function Background3D() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x050505), 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default memo(Background3D);
