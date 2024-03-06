import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedData } from "@/components/RecommendedProducts/constants";
import "swiper/css/navigation";
import Camp from "@/assets/camp.svg";

import { Navigation } from "swiper/modules";

import "swiper/css";

const RecommendedProducts = () => {
  return (
    <div className="flex flex-col items-center mt-[124px] container">
      <h4 className="flex justify-center text-[29px] font-bold text-center leading-none max-w-[696px] justify-center mb-[72px]">
        Бидний санал болгож буй гайхамшигт аялалууд
      </h4>
      <div className="w-full h-[320px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {RecommendedData.map((item) => (
            <SwiperSlide>
              <div>
                <div className="">
                  <Image
                    className="relative rounded-[64px]"
                    src={item.src}
                    alt=""
                    width={200}
                    height={264}
                  />
                  <div className="absolute bottom-[-20px] left-0 right-0 mx-auto bg-white rounded-full border h-[54px] w-[54px] flex justify-center items-center">
                    <Image
                      className=""
                      src={Camp}
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h4>Тэрэлж ресорт морын аялал</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProducts;
