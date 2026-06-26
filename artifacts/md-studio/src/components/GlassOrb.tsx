import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import FallbackOrb from "./FallbackOrb";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

function OrbitingRing({
  radius, tube, speed, color, rotation,
}: {
  radius: number; tube: number; speed: number; color: string;
  rotation: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.z = rotation[2];
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color} transparent opacity={0.5}
        emissive={color} emissiveIntensity={0.4}
        roughness={0.1} metalness={0.8}
      />
    </mesh>
  );
}

function OrbitingParticles({ count = 6, radius = 2.2 }) {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => ({
    angle: (i / count) * Math.PI * 2,
    size: 0.05 + (i % 3) * 0.02,
    color: i % 2 === 0 ? "#38BDF8" : "#8B5CF6",
  })), [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[
          Math.cos(p.angle) * radius,
          Math.sin(p.angle * 0.5) * 0.6,
          Math.sin(p.angle) * radius,
        ]}>
          <sphereGeometry args={[p.size, 16, 16]} />
          <meshStandardMaterial
            color={p.color} emissive={p.color}
            emissiveIntensity={1} transparent opacity={0.95}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside samples={4} thickness={0.5}
          chromaticAberration={0.15} anisotropy={0.3}
          distortion={0.2} distortionScale={0.5}
          temporalDistortion={0.1} iridescence={0.3}
          iridescenceIOR={1} iridescenceThicknessRange={[0, 1400]}
          color="#2563EB" attenuationColor="#2563EB"
          attenuationDistance={2} transmission={0.95}
          roughness={0.05} ior={1.5}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  return (
    <mesh scale={0.6}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#2563EB" emissive="#2563EB"
        emissiveIntensity={0.7} transparent opacity={0.85}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#38BDF8" />
      <pointLight position={[5, -3, 5]} intensity={0.4} color="#8B5CF6" />
      <GlassSphere />
      <InnerCore />
      <OrbitingRing radius={1.8} tube={0.022} speed={0.5} color="#38BDF8" rotation={[Math.PI / 4, 0, 0]} />
      <OrbitingRing radius={2.1} tube={0.016} speed={-0.3} color="#2563EB" rotation={[0, Math.PI / 3, Math.PI / 6]} />
      <OrbitingRing radius={2.4} tube={0.013} speed={0.4} color="#8B5CF6" rotation={[Math.PI / 6, Math.PI / 4, 0]} />
      <OrbitingParticles count={6} radius={2.2} />
      <ContactShadows position={[0, -2.2, 0]} opacity={0.25} scale={8} blur={2} far={4} />
      <Environment preset="city" />
    </>
  );
}

export default function GlassOrb() {
  if (!isWebGLAvailable()) {
    return <FallbackOrb />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      }}
    >
      <Scene />
    </Canvas>
  );
}
