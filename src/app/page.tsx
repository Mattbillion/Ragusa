"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import SingleProduct from "@/components/SingleProduct";
import { ProductType } from "@/types/types";
import { staticData } from "@/components/SingleProduct/constants";
import FilterTab from "@/components/FilterTab";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
      <div className="container">
        <div className="flex flex-col items-center gap-4 justify-center mb-[120px]">
          <h4 className="max-w-[632px] text-[29px] font-bold text-center leading-[120%]">
            Монгол улсад ирээд заавал үзэх байгалын үзэсгэлэнт газарууд
          </h4>
          <FilterTab filterValues={filterValues} />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {staticData.map((product) => (
            <SingleProduct product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const filterValues = ["Бүгд", "Үзвэрүүд", "Нуур", "Улаанбаатар", "Уул хад"];
