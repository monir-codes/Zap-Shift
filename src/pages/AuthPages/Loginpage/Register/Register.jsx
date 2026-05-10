// src/pages/Register.jsx

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUser } from "react-icons/hi";
import authImage from "../../../../assets/icons/authImage.png";
import Logo from "../../../../components/Logo/Logo";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 md:px-16 bg-[#f8f8f8]"
      >
        <div className="w-full max-w-sm">
          {/* LOGO */}
          <div className="flex items-center gap-2 mb-12">
            <Logo></Logo>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-black mb-2">
            Create an Account
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Register with ZapShift
          </p>

          {/* PROFILE ICON */}
          <div className="mb-5">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center relative">
              <HiOutlineUser className="text-gray-500 text-2xl" />

              <span className="absolute bottom-1 right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-white"></span>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>

              <input
                type="text"
                placeholder="Name"
                className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-lime-400 text-sm bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Email</label>

              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-lime-400 text-sm bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Password</label>

              <input
                type="password"
                placeholder="Password"
                className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-lime-400 text-sm bg-white"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              className="w-full bg-lime-400 hover:bg-lime-500 transition-all duration-300 text-white font-medium py-2.5 rounded-md shadow-sm"
            >
              Register
            </motion.button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <span className="text-lime-500 font-medium cursor-pointer hover:underline">
              Login
            </span>
          </p>

          {/* OR */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* GOOGLE BTN */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 py-2.5 rounded-md flex items-center justify-center gap-3 text-sm font-medium text-gray-700"
          >
            <FcGoogle className="text-xl" />
            Register with google
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 bg-[#eef0e2] items-center justify-center relative overflow-hidden"
      >
        {/* BG CIRCLES */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-lime-100 opacity-40"></div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <img
            src={authImage}
            alt="delivery"
            className="w-[350px] object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;