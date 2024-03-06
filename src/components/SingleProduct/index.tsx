import React from "react";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className="flex flex-col">
      <Image src="dada" alt="dada" />
      <div>
        <h4 className="text-[16px]"></h4>
        <div>
          <p className="text-[14px]"></p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
