"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  Float,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function OrbitingRing({
  radius,
  tube,
  speed,
  color,
  rotation,
}: {
  radius: number;
  tube: number;
  speed: number;
  color: string;
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
        color={color}
        transparent
        opacity={0.4}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

function OrbitingParticles({ count = 4, radius = 2.2 }) {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      size: 0.04 + Math.random() * 0.04,
      color: i % 2 === 0 ? "#38BDF8" : "#8B5CF6",
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(particle.angle) * radius,
            Math.sin(particle.angle * 0.5) * 0.5,
            Math.sin(particle.angle) * radius,
          ]}
        >
          <sphereGeometry args={[particle.size, 16, 16]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
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
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.15}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={0.3}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#2563EB"
          attenuationColor="#2563EB"
          attenuationDistance={2}
          transmission={0.95}
          roughness={0.05}
          ior={1.5}
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
        color="#2563EB"
        emissive="#2563EB"
        emissiveIntensity={0.6}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Platform() {
  return (
    <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.5, 2.2, 64]} />
      <meshStandardMaterial
        color="#E2E8F0"
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#38BDF8" />
      <pointLight position={[5, -3, 5]} intensity={0.3} color="#8B5CF6" />

      <GlassSphere />
      <InnerCore />

      <OrbitingRing
        radius={1.8}
        tube={0.02}
        speed={0.5}
        color="#38BDF8"
        rotation={[Math.PI / 4, 0, 0]}
      />
      <OrbitingRing
        radius={2.0}
        tube={0.015}
        speed={-0.3}
        color="#2563EB"
        rotation={[0, Math.PI / 3, Math.PI / 6]}
      />
      <OrbitingRing
        radius={2.3}
        tube={0.012}
        speed={0.4}
        color="#8B5CF6"
        rotation={[Math.PI / 6, Math.PI / 4, 0]}
      />

      <OrbitingParticles count={6} radius={2.2} />
      <Platform />

      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.3}
        scale={8}
        blur={2}
        far={4}
      />
      <Environment preset="city" />
    </>
  );
}

export default function GlassOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
