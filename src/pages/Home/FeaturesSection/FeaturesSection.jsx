// FeaturesSection.jsx

import React from "react";
import {
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    icon: <FaMapMarkedAlt />,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <FaHeadset />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-7">

        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="group bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fadeUp"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center min-w-[110px]">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-3xl md:text-4xl transition-all duration-500 group-hover:bg-teal-700 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                {feature.icon}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-teal-600 to-transparent"></div>

            <div className="block md:hidden w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-600 to-transparent"></div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[#063b3b] text-xl md:text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7 text-sm md:text-[15px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesSection;