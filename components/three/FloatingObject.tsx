"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

interface FloatingObjectProps {
  isMobile?: boolean;
}

export function FloatingObject({ isMobile = false }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (meshRef.current) {
      // Smooth continuous rotation
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;

      // Mouse influence with gentle damping
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        meshRef.current.rotation.x + mouseY * 0.4,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        meshRef.current.rotation.y + mouseX * 0.4,
        0.05
      );
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
      ringRef.current.rotation.x = THREE.MathUtils.lerp(
        ringRef.current.rotation.x,
        mouseY * 0.3,
        0.03
      );
      ringRef.current.rotation.y = THREE.MathUtils.lerp(
        ringRef.current.rotation.y,
        mouseX * 0.3,
        0.03
      );
    }
  });

  const scale = isMobile ? 1.6 : 2.2;

  return (
    <Float
      speed={2.2}
      rotationIntensity={1.2}
      floatIntensity={1.8}
      floatingRange={[-0.15, 0.15]}
    >
      <group position={[0, 0, 0]}>
        {/* Core distorted abstract metallic sphere */}
        <mesh ref={meshRef} scale={scale} castShadow receiveShadow>
          <sphereGeometry args={[1, isMobile ? 32 : 64, isMobile ? 32 : 64]} />
          <MeshDistortMaterial
            color="#0891b2" // Vibrant Cyan
            emissive="#0e3a53"
            roughness={0.15}
            metalness={0.88}
            distort={0.42}
            speed={2.4}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Outer glowing wireframe icosahedron */}
        <mesh ref={wireframeRef} scale={scale * 1.35}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbiting Tech Rings */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]} scale={scale * 1.6}>
            <torusGeometry args={[1, 0.015, 16, 100]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#7c3aed"
              emissiveIntensity={0.8}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>

          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]} scale={scale * 1.8}>
            <torusGeometry args={[1, 0.012, 16, 100]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0284c7"
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
