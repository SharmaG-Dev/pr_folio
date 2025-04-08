"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container, SectionTag } from "../global";
import { TestimonialsCard } from "../cards";

export default function Testimonials() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <Container>
        <div className="flex flex-col h-sub-main justify-between">
          <div className="flex flex-col items-center gap-3">
            <SectionTag name="Testimonials"/>
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-dark">
              My happy clients
            </h1>
          </div>

          <div>
            <Swiper
              modules={[Navigation]}
              navigation={true}
              className="mySwiper !text-primary !fill-primary "
            >
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
