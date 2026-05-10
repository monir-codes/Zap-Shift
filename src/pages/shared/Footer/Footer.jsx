// Footer.jsx

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "../../../components/Logo/Logo";

const navLinks = [
  "Services",
  "Coverage",
  "About Us",
  "Pricing",
  "Blog",
  "Contact",
];

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    bg: "bg-[#0077B5]",
  },
  {
    icon: <FaXTwitter />,
    bg: "bg-[#1DA1F2]",
    text: "text-black",
  },
  {
    icon: <FaFacebookF />,
    bg: "bg-[#1877F2]",
  },
  {
    icon: <FaYoutube />,
    bg: "bg-[#FF0000]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] px-4 py-10 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-black rounded-[28px] px-6 md:px-12 py-14 overflow-hidden relative"
      >
        {/* Glow Effect */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-lime-400/10 blur-[120px]" />

        {/* Logo */}
        <div className="flex flex-col items-center text-center relative z-10">
          <Logo></Logo>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mt-5 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-cyan-500/20 my-10"></div>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 relative z-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href="/"
              whileHover={{ y: -2 }}
              className={`relative text-sm transition-colors duration-300 ${
                link === "About Us"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}

              {/* Active Underline */}
              {link === "About Us" && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-5 h-[3px] bg-red-500 rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-cyan-500/20 my-10"></div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 relative z-10">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href="/"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm shadow-lg transition-all duration-300 ${item.bg} ${item.text}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}