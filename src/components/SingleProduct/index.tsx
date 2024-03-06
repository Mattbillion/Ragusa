import React from "react";
import Image from "next/image";
import LocationIcon from "@/assets/icons/location.svg";
import { ProductType } from "@/types/types";

const SingleProduct = ({ product }: { ProductType }) => {
  return (
    <div className="flex flex-col">
      <Image src={LocationIcon} alt="dada" />
      <div>
        <h4 className="text-[16px]"></h4>
        <div className="flex items-center gap-1">
          <Image src={LocationIcon} alt="Location-pin" width={16} height={16} />
          <p className="text-[14px]"></p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
