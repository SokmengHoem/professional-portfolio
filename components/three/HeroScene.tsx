"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FloatingObject } from "./FloatingObject";
import { ParticleBackground } from "./ParticleBackground";

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return <HeroFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center">
      <Canvas
        dpr={[1, 1.5]} // Clamped DPR for silky 60 FPS
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 6 : 5.2]} fov={45} />

        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[5, -5, 5]} intensity={1.0} color="#8b5cf6" />
        <spotLight
          position={[0, 10, 0]}
          intensity={0.8}
          angle={0.6}
          penumbra={1}
          color="#38bdf8"
        />

        <Suspense fallback={null}>
          <FloatingObject isMobile={isMobile} />
          <ParticleBackground count={isMobile ? 120 : 220} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export function HeroFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-blue-500/30 blur-2xl animate-pulse" />
      <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-cyan-400/40 animate-spin [animation-duration:14s]" />
      <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-purple-400/40 animate-spin [animation-direction:reverse] [animation-duration:9s]" />
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-[0_0_40px_rgba(6,182,212,0.6)]" />
    </div>
  );
}
