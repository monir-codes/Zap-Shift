// TrustedCompanies.jsx
import React from "react";

import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import randstad from "../../../assets/brands/randstad.png";

const logos = [
  casio,
  amazon,
  moonstar,
  star,
  startPeople,
  randstad,
];

const TrustedCompanies = () => {
  return (
    <section className="w-full bg-[#ececec] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="w-full border-t border-[#2f80c3]" />

          <div className="absolute bg-[#ececec] px-4">
            <h2 className="text-[#0d5b8f] font-bold text-sm sm:text-base md:text-lg text-center">
              We've helped thousands of sales teams
            </h2>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="marquee flex items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="company-logo"
                  className="h-8 sm:h-10 md:h-8 object-contain
                  grayscale hover:grayscale-0
                  transition duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-b border-dashed border-[#9db8c5] mt-10" />
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;