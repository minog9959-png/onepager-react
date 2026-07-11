import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import '../index.css'
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Team() {
    const teamMembers = [
        {
            id: 1,
            image: team1,
            name: "John Smith",
            role: "UI/UX Designer",
            description:
                "Creative designer focused on modern user experiences and responsive interfaces.",
        },
        {
            id: 2,
            image: team2,
            name: "Sarah Johnson",
            role: "Frontend Developer",
            description:
                "Passionate about building fast and interactive React applications.",
        },
        {
            id: 3,
            image: team3,
            name: "David Miller",
            role: "Backend Developer",
            description:
                "Experienced in Node.js, Express, MongoDB and REST API development.",
        },
        {
            id: 4,
            image: team4,
            name: "Emily Brown",
            role: "Project Manager",
            description:
                "Leading projects with agile methodologies and effective team collaboration.",
        },
        {
            id: 5,
            image: team1,
            name: "Emily Brown",
            role: "Project Manager",
            description:
                "Leading projects with agile methodologies and effective team collaboration.",
        },
        {
            id: 6,
            image: team2,
            name: "Emily Brown",
            role: "Project Manager",
            description:
                "Leading projects with agile methodologies and effective team collaboration.",
        },
    ];

    return (
        <section id="team" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="text-blue-600 font-semibold uppercase tracking-widest">
                        Our Experts
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-800">
                        Meet Our Team
                    </h2>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-7">
                        Our talented professionals work together to create beautiful,
                        responsive and high-quality digital experiences for our clients.
                    </p>

                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>

                </div>

                {/* Cards */}
                <div className="relative">
                    <Swiper
                      spaceBetween={30}
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: ".team-next",
                            prevEl: ".team-prev",
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >

                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id} className="pb-5">

                                <div
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden group transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                                >

                                    {/* Image */}

                                    <div className="overflow-hidden">

                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                                        />

                                    </div>

                                    {/* Content */}

                                    <div className="p-6 text-center">

                                        <h3 className="text-2xl font-bold text-gray-800">
                                            {member.name}
                                        </h3>

                                        <p className="text-blue-600 font-semibold mt-2">
                                            {member.role}
                                        </p>

                                        <p className="text-gray-600 text-sm leading-6 mt-4">
                                            {member.description}
                                        </p>

                                        {/* Social Icons */}

                                        <div className="bg-sky-600 flex justify-center gap-4 py-4 mt-6">

                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center transition duration-300 hover:bg-white hover:text-sky-600"
                                            >
                                                <FaFacebookF />
                                            </a>

                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center transition duration-300 hover:bg-white hover:text-sky-600"
                                            >
                                                <FaTwitter />
                                            </a>

                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center transition duration-300 hover:bg-white hover:text-sky-600"
                                            >
                                                <FaLinkedinIn />
                                            </a>

                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center transition duration-300 hover:bg-white hover:text-sky-600"
                                            >
                                                <FaGithub />
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                        ))}

                    </Swiper>
                    <div className="team-prev absolute left-0 top-1/2 -translate-y-1/2 w-14 h-20 bg-black/80 text-white flex items-center justify-center cursor-pointer hover:bg-cyan-500 duration-300 z-10 rounded-r-lg">
                        <FaChevronLeft />
                    </div>

                    <div className="team-next absolute right-0 top-1/2 -translate-y-1/2 w-14 h-20 bg-black/80 text-white flex items-center justify-center cursor-pointer hover:bg-cyan-500 duration-300 z-10 rounded-l-lg">
                        <FaChevronRight />
                    </div>

                </div>
            </div>

        </section >

    );
}

export default Team;