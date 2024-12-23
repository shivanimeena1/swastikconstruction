import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper styles

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Swiper Slider */}
      <Swiper
        loop={true} // Infinite loop
        pagination={{ clickable: true }} // Pagination dots
        navigation={true} // Navigation arrows
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <span className="mb-4 text-lg tracking-wide uppercase">Luxury</span>
              <h1 className="text-5xl font-bold text-center">
                Enhanced Living Experience
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <span className="mb-4 text-lg tracking-wide uppercase">Craftsmanship</span>
              <h1 className="text-5xl font-bold text-center">
                Attention to Detail
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg3})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <span className="mb-4 text-lg tracking-wide uppercase">Comfort</span>
              <h1 className="text-5xl font-bold text-center">
                Modern Living Spaces
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg4})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <span className="mb-4 text-lg tracking-wide uppercase">Vision</span>
              <h1 className="text-5xl font-bold text-center">
                Building the Future
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Book a Visit Button */}
      <a
        href="#"
        className="absolute right-0 px-6 py-3 tracking-wide text-white uppercase transform -translate-y-1/2 bg-purple-700 top-1/2 rotate-60"
        style={{ writingMode: "vertical-rl" }}
      >
        Book a Visit
      </a>
    </section>
  );
};

export default Hero;
