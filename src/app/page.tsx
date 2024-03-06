"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import SingleProduct from "@/components/SingleProduct";
import { ProductType } from "@/types/types";
import { staticData } from "@/components/SingleProduct/constants";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
      <div>
        {staticData.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
    </div>
  );
}
