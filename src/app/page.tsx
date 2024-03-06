"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import RecommendedProducts from "@/components/RecommendedProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
    </div>
  );
}
