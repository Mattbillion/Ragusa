"use client";

import HeroSection from "@/components/HeroSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import SingleProduct from "@/components/SingleProduct";
import { staticData } from "@/components/SingleProduct/constants";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
      <div>
        {staticData.map((product, idx) => (
          <SingleProduct product={product} key={idx} />
        ))}
      </div>
    </div>
  );
}
