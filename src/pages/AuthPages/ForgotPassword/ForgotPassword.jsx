import { motion } from "framer-motion";
import { Link } from "react-router";
import forgotImg from "../../../assets/icons/authImage.png";
import Logo from "../../../components/Logo/Logo";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-10">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <Logo></Logo>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-md"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Forgot Password
            </h1>

            <p className="text-[#5E5E5E] leading-7 mb-8 text-sm md:text-base">
              Enter your email address and we’ll send you a reset link.
            </p>

            {/* Form */}
            <form className="space-y-5">
              
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 px-4 rounded-lg border border-[#D5D7DA] bg-white outline-none focus:ring-2 focus:ring-[#C1E34F] transition-all duration-200"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#C1E34F] hover:bg-[#b4d93d] transition-all duration-300 font-semibold text-black shadow-sm"
              >
                Send
              </button>
            </form>

            {/* Login Link */}
            <p className="text-sm text-[#707070] mt-7">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-[#B8D94A] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center justify-center bg-[#EEF1E3] relative overflow-hidden">
          
          {/* Decorative Blur */}
          <div className="absolute w-72 h-72 bg-[#C1E34F]/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={forgotImg}
            alt="Forgot Password"
            className="relative z-10 w-[65%] max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}