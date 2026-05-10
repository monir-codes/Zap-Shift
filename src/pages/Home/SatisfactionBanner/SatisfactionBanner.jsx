// SatisfactionBanner.jsx

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LocationMerchant from "../../../assets/icons/location-merchant.png";

const SatisfactionBanner = () => {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 md:px-8 py-12">
      {/* Top Dashed Border */}
      <div className="max-w-6xl mx-auto border-t border-dashed border-teal-500 mb-10"></div>

      {/* Banner */}
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[28px] bg-[#013b44] px-6 md:px-12 py-10 md:py-14">

        {/* Top Wave Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-2xl opacity-60"></div>

        {/* Wave Line */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg
            className="w-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100C150 10 350 10 500 100C650 190 850 190 1000 100C1100 40 1150 40 1200 80"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">

            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-7 mb-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">

              {/* Primary Button */}
              <button className="group bg-lime-300 hover:bg-lime-400 text-[#013b44] font-semibold px-7 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105">
                Become a Merchant
                <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </button>

              {/* Secondary Button */}
              <button className="group border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-[#013b44] font-semibold px-7 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Earn with ZapShift Courier
                <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Right Illustration */}

        </div>

        {/* Bottom Curved Line */}
        <div className="absolute bottom-10 right-0 opacity-40 items-center">
            <img src={LocationMerchant} alt="Location Merchant" />
        </div>
      </div>

    </section>
  );
};

export default SatisfactionBanner;