import React from "react";
import Image from "next/image";
import LocationIcon from "@/assets/icons/location.svg";
import { ProductType } from "@/types/types";

const SingleProduct = ({ product }: any) => {
  return (
    <div className="flex flex-col">
      <div className="relative max-w-[342px] max-h-[342px] aspect-square rounded-md overflow-hidden">
        <Image src={product.image} alt="dada" objectFit="cover" fill />
      </div>

      <div className="flex flex-col px-2 py-3">
        <h4 className="text-[16px]">{product.productName}</h4>
        <div className="flex items-center gap-1">
          <Image src={LocationIcon} alt="Location-pin" width={16} height={16} />
          <p className="text-[14px]">{product.destination}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
