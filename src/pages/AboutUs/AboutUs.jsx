import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "story",
    label: "Story",
    content: `
We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
    `,
  },

  {
    id: "mission",
    label: "Mission",
    content: `
Our mission is to simplify delivery services through smart logistics and customer-focused solutions. We aim to create a seamless delivery experience for individuals and businesses across the country.
    `,
  },

  {
    id: "success",
    label: "Success",
    content: `
Through innovation and dedication, we have successfully delivered thousands of parcels nationwide with trusted service and real-time delivery support.
    `,
  },

  {
    id: "team",
    label: "Team & Others",
    content: `
Our dedicated team works around the clock to ensure every parcel reaches safely and on time. Together, we continue building a reliable and efficient delivery network.
    `,
  },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section className="bg-[#F3F3F3] py-8 md:py-14 px-3 md:px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[28px] p-6 sm:p-8 md:p-12 shadow-sm">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[#003B3F] text-3xl md:text-5xl font-extrabold mb-4">
            About Us
          </h2>

          <p className="text-[#707070] max-w-3xl leading-7 text-sm md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="border-t border-[#E6E6E6] pt-7">
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-7 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative pb-2 text-sm md:text-base font-medium transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "text-[#7E8D2C]"
                      : "text-[#7B7B7B] hover:text-[#003B3F]"
                  }
                `}
              >
                {tab.label}

                {/* Active Underline */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C3E34F] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#6F6F6F] leading-9 text-sm md:text-base space-y-6"
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.content.trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}