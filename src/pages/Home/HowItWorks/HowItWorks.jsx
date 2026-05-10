import { motion } from "framer-motion";
import { HiOutlineTruck } from "react-icons/hi2";

const services = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#ECECEC] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#03373D] text-2xl md:text-3xl font-extrabold mb-10"
        >
          How it Works
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="bg-[#F7F7F7] rounded-3xl p-7 shadow-sm hover:shadow-xl border border-transparent hover:border-[#0B4B52]/10 duration-300"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3F4] flex items-center justify-center">
                  <HiOutlineTruck className="text-[#03373D] text-3xl" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#03373D] text-lg font-bold mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6F6F6F] text-sm leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}