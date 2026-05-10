// Testimonials.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customerTop from "../../../assets/customer-top.png";

const reviews = [
  {
    id: 1,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Rasel Ahmed",
    role: "CTO",
    review:
      "Amazing delivery service! My parcel arrived on time and the support team was very responsive throughout the process.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "CEO",
    review:
      "Very professional courier company. Tracking system and customer service are top-notch and reliable.",
  },
  {
    id: 4,
    name: "Jannat Mim",
    role: "Business Owner",
    review:
      "I regularly use this platform for deliveries. Their service quality and parcel safety are excellent.",
  },
  {
    id: 5,
    name: "Tanvir Hasan",
    role: "Entrepreneur",
    review:
      "Fast delivery, easy tracking, and professional behavior. Highly recommended for business deliveries.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <img
              src={customerTop}
              alt="Customer Top"
              className=" object-contain"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#063b3b] mb-4">
            What our customers are sayings
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-7 text-sm md:text-base">
            Enhance posture, mobility, and well-being effortlessly with
            Posture Pro. Achieve proper alignment, reduce pain, and strengthen
            your body with ease!
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 rounded-[28px] p-8 h-full ${
                    isActive
                      ? "bg-white scale-100 opacity-100 shadow-xl"
                      : "bg-white/50 scale-90 opacity-50"
                  }`}
                >
                  {/* Quote */}
                  <FaQuoteLeft className="text-4xl text-[#d8e7e7] mb-6" />

                  {/* Review */}
                  <p className="text-gray-500 leading-7 text-sm border-b border-dashed border-cyan-300 pb-6">
                    {item.review}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 pt-6">

                    <div className="w-12 h-12 rounded-full bg-cyan-900 flex items-center justify-center text-white font-bold text-lg">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-bold text-[#063b3b]">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex items-center justify-center gap-5 mt-2">

          <button className="custom-prev w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#063b3b] hover:bg-cyan-700 hover:text-white transition-all duration-300">
            <FaArrowLeft />
          </button>

          <button className="custom-next w-11 h-11 rounded-full bg-lime-300 shadow-md flex items-center justify-center text-[#063b3b] hover:bg-cyan-700 hover:text-white transition-all duration-300">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper Custom Style */}
      <style>
        {`
          .swiper-pagination {
            bottom: 0px !important;
          }

          .swiper-pagination-bullet {
            background: #8fd3d3;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #063b3b;
            width: 22px;
            border-radius: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;