import hero1 from "../assets/images/slide.jpg";
import hero2 from "../assets/images/slide.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";

function HeroSlider() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
      >

        {/* Slide 1 */}

        <SwiperSlide>

          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${hero1})`
            }}
          >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold">

                Welcome To

                <span className="text-cyan-400">
                  {" "}ONE
                </span>

                PAGER

              </h1>

              <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-10 px-4">

                We design and develop awesome websites and smart
                applications using the latest technologies.

              </p>

              <a
                href="#portfolio"
                className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-10 py-4 text-xl uppercase duration-300 nav-link"
              >
                Learn More
              </a>

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>

          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${hero2})`
            }}
          >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative h-full flex flex-col justify-center items-center text-center text-white">

              <h1 className="text-6xl font-bold uppercase">
              Digital Agency
              </h1>

              <p className="text-2xl mt-6 max-w-3xl">
                We create beautiful websites with React,
                Tailwind CSS and modern UI.
              </p>

              <a
                href="#services"
                className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-10 py-4 uppercase nav-link"
              >
                Our Services
              </a>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>
      <div className="hero-prev absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer text-white text-2xl sm:text-3xl lg:text-5xl">
        <FaChevronLeft />
      </div>
      <div className="hero-next absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer text-white text-2xl sm:text-3xl lg:text-5xl">
        <FaChevronRight />
      </div>

    </section>
  );
}

export default HeroSlider;