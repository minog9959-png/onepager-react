import client1 from "../assets/images/client-logo1.png";
import client2 from "../assets/images/client-logo2.png";
import client3 from "../assets/images/client-logo3.png";
import client4 from "../assets/images/client-logo4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function About() {

    const clients = [
        client1,
        client2,
        client3,
        client4,
        client1,
        client3,
    ];

    return (

        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase">
                            Company Biography
                        </h2>

                        <span className="inline-block mt-4 bg-cyan-500 text-white px-4 py-2">
                            SHORT STORY ABOUT US
                        </span>

                        <p className="mt-8 text-gray-500 leading-7 md:leading-8 text-sm md:text-base">
                            This is <span className="text-cyan-500 font-semibold">Photoshop's</span> version
                            of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor, nisi elit.
                        </p>

                        <p className="mt-8 text-gray-500 leading-7 md:leading-8 text-sm md:text-base">
                            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                            accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                            odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                            aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos.
                        </p>

                        <p className="mt-6 text-gray-500 leading-8">
                            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit
                            amet a augue. Sed non mauris vitae erat consequat auctor</p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>

                       <h2 className="text-3xl md:text-4xl font-bold uppercase">
                            Our Clients
                        </h2>

                        <span className="inline-block mt-4 bg-cyan-500 text-white px-4 py-2">
                            WE LOVE OUR CLIENTS
                        </span>
                      <div className="mt-8 md:mt-10 relative">
                            <Swiper
                                className="about-slider"
                                modules={[Pagination, Autoplay]}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                            >
                                {/* Slide 1 */}
                                <SwiperSlide>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-cyan-500 h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded">
                                            <img src={client1} alt="client1" className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded">
                                            <img src={client2} alt="client2" className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded">
                                            <img src={client3} alt="client3" className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded">
                                            <img src={client4} alt="client4" className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" />
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Slide 2 */}
                                <SwiperSlide>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-cyan-500 h-40 flex items-center justify-center">
                                            <img src={client2} alt="client2" className="w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-40 flex items-center justify-center">
                                            <img src={client3} alt="client3" className="w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-40 flex items-center justify-center">
                                            <img src={client4} alt="client4" className="w-36 object-contain" />
                                        </div>

                                        <div className="bg-cyan-500 h-40 flex items-center justify-center">
                                            <img src={client1} alt="client1" className="w-36 object-contain" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;