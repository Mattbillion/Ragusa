import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PhuQuoc from "@/assets/FooterImages/FooterImage.webp";

export const CoverFlowSwiper = () => {
  return (
    <Swiper
      grabCursor={true}
      effect={"coverflow"}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        reverseDirection: false,
        delay: 2500,
      }}
      coverflowEffect={{
        slideShadows: true,
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="max-w-[464px] w-full"
    >
      {footerSwiperData.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.src}
            alt="thumbnail"
            height={208}
            width={464}
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const footerSwiperData = [
  {
    id: 1,
    src: PhuQuoc,
    link: "/somewhere",
  },
  {
    id: 2,
    src: PhuQuoc,
    link: "/somewhere",
  },
  {
    id: 3,
    src: PhuQuoc,
    link: "/somewhere",
  },
  {
    id: 4,
    src: PhuQuoc,
    link: "/somewhere",
  },
];
