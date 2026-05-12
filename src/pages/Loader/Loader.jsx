import { motion } from "framer-motion";
import { FaShippingFast } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-[#003B3F] flex items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-[#C4E34F]/20 blur-3xl rounded-full"></div>

      <div className="relative flex flex-col items-center">
        
        {/* Animated Circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="w-28 h-28 border-[6px] border-[#ffffff20] border-t-[#C4E34F] rounded-full flex items-center justify-center"
        >
          
          {/* Truck Icon */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
          >
            <FaShippingFast className="text-[#C4E34F] text-4xl" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-8 text-white text-2xl md:text-3xl font-extrabold tracking-wide"
        >
          Loading...
        </motion.h2>

        {/* Small Dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: dot * 0.15,
              }}
              className="w-3 h-3 bg-[#C4E34F] rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}