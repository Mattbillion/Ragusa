import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedData } from "@/components/RecommendedProducts/constants";
import "swiper/css/navigation";
import Camp from "@/assets/icons/camp.svg";

import { Navigation } from "swiper/modules";

import "swiper/css";

const RecommendedProducts = () => {
  return (
    <div className="flex flex-col items-center mt-[124px] container">
      <h4 className="flex justify-center text-[29px] font-bold text-center leading-none max-w-[696px] mb-[72px]">
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
          {RecommendedData.map((item, idx) => (
            <SwiperSlide key={idx}>
                <div className="flex items-center flex-col justify-center">
                    <Image
                        className="relative rounded-[64px] drop-shadow-lg"
                        src={item.src}
                        alt=""
                        width={200}
                        height={264}
                    />
                    <Image
                        className="mx-auto bg-white rounded-full border h-[54px] w-[54px] flex justify-center items-center mt-[-27px] z-1 relative drop-shadow-lg mb-4"
                        src={Camp}
                        alt="icon"
                        width={24}
                        height={24}
                    />
                    <div className="flex items-center flex-col justify-center">
                        <h4 className="text-lg text-center max-w-[80%] font-semibold text-[#4D5462]">Тэрэлж ресорт морын аялал</h4>
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
