"use client";

import dynamic from "next/dynamic";
import { HeroFallback } from "./HeroScene";

export const HeroSceneDynamic = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);
