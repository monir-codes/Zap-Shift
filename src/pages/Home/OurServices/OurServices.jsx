import { motion } from "framer-motion";
import { TbPackageExport } from "react-icons/tb";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    active: false,
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    active: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    active: false,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    active: false,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    active: false,
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    active: false,
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#ECECEC] px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto bg-[#003B3F] rounded-[28px] px-5 sm:px-8 lg:px-14 py-12 md:py-16 overflow-hidden">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Our Services
          </h2>

          <p className="text-[#D8E5E5] text-sm md:text-base max-w-3xl mx-auto leading-7">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`
                rounded-3xl p-7 text-center transition-all duration-300 cursor-pointer
                ${
                  service.active
                    ? "bg-[#C7E65A]"
                    : "bg-[#F3F3F3] hover:bg-white"
                }
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#E8ECF7] flex items-center justify-center shadow-sm">
                  <TbPackageExport className="text-[#FF7A59] text-3xl" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#003B3F] text-xl font-extrabold leading-snug mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#5B6668] text-sm leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}