import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import heroSectionData from "./constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {heroSectionData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image src={item.src} alt="HeroSection" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSection;

const Images = [];
