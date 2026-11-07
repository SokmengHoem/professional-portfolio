"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleBackgroundProps {
  count?: number;
}

export function ParticleBackground({ count = 200 }: ParticleBackgroundProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color("#06b6d4"); // Cyan
    const color2 = new THREE.Color("#8b5cf6"); // Purple
    const color3 = new THREE.Color("#38bdf8"); // Sky

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread in a spherical distribution
      const radius = THREE.MathUtils.randFloat(4, 14);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      // Random color blend
      const randomColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3;
      col[i3] = randomColor.r;
      col[i3 + 1] = randomColor.g;
      col[i3 + 2] = randomColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;

      // Mouse subtle shift
      pointsRef.current.position.x = THREE.MathUtils.lerp(
        pointsRef.current.position.x,
        state.pointer.x * 0.5,
        0.05
      );
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        state.pointer.y * 0.5,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
