// FAQSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, the posture corrector is designed to fit different body types and is adjustable for maximum comfort.",
  },
  {
    question:
      "Does it really help with back pain and posture improvement?",
    answer:
      "Regular use can help improve posture and reduce mild back discomfort caused by poor sitting habits.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models include smart vibration reminders to help maintain correct posture.",
  },
  {
    question:
      "How will I be notified when the product is back in stock?",
    answer:
      "You will receive an email notification once the product becomes available again.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f2f2f2] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b42]">
            Frequently Asked Question (FAQ)
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with
            Posture Pro. Achieve proper alignment, reduce pain, and strengthen
            your body with ease!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                layout
                key={index}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-[#5bbbc5] bg-[#dff4f6]"
                    : "border-transparent bg-white"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-6 py-5"
                >
                  <span className="font-semibold text-[#0b3b42] text-sm md:text-base">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FiChevronDown className="text-[#0b3b42]" size={20} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-5 md:px-6 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="group flex items-center gap-3 bg-[#c9eb4b] hover:bg-[#b9dd38] transition-all duration-300 text-black font-semibold px-6 py-3 rounded-full">
            <span>See More FAQ’s</span>

            <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <FiArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}