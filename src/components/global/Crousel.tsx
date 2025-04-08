"use client";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

interface CarouselProps {
  className?: string;
  images: string[];
  effect?: "cards" | "fade" | "cube" | "flip" | "coverflow";
  grabCursor?: boolean;
  transitionSpeed?: number;
  imageClassName?: string;
  shadowEffect?: boolean;
  grayscaleEffect?: boolean;
}

export default function Carousel({
  images,
  className,
  effect = "cards",
  grabCursor = true,
  transitionSpeed = 300,
  imageClassName = "",
  shadowEffect = true,
  grayscaleEffect = true,
}: CarouselProps) {
  return (
    <div className={className}>
      <Swiper
        effect={effect}
        grabCursor={grabCursor}
        speed={transitionSpeed}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full pb-[56.25%] overflow-hidden">
              <Image
                src={item}
                alt={`sliderImage-${index}`}
                className={`absolute top-0 left-0 h-full w-full object-cover ${
                  shadowEffect ? "shadow-md" : ""
                } ${
                  grayscaleEffect ? "grayscale hover:grayscale-0" : ""
                } ${imageClassName}`}
                layout="fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
