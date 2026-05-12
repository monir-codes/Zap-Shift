// Error404.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-[#F3F3F3] rounded-[30px] flex flex-col items-center justify-center py-16 md:py-24 shadow-sm"
      >
        {/* Image */}
        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
          alt="404 Error"
          className="w-[170px] md:w-[220px] object-contain select-none"
          draggable="false"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[42px] md:text-[64px] font-black text-[#151515] leading-none"
        >
          Error 404
        </motion.h1>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="bg-[#C7E54D] hover:bg-[#b9d840] transition-all duration-300 text-black font-semibold px-8 py-3 rounded-xl shadow-md"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error404;