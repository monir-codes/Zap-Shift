// LoginPage.jsx

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

// 👉 your image import
import deliveryImg from "../../../assets/icons/authImage.png";
import Logo from "../../../components/Logo/Logo";
import { Link, Navigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

export default function LoginPage() {

  const {signIn, user, setLoading , signInWithGoogle} = useAuth();
  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleSignIn = (data) => {
    setLoading(true);
    signIn(data).then(result => {
      const user = result.user;
      console.log(user);
      navigation('/'); // Navigate to home page after successful login
    }).catch(error => {
      console.log(error);
      setLoading(false);
    }) 
  }

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle().then(result => {
      const user = result.user;
      setLoading(false);
      navigation('/'); // Navigate to home page after successful login
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  };

  if (user) {
    setLoading(false);
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center px-6 py-10 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-16">
            {/* custom logo */}
           
            <Logo></Logo>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-3 mb-10 text-sm md:text-base">
            Login with ZapShift
          </p>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit(handleSignIn)}>
            {/* Email */}
            <div>
              <label className="text-sm text-gray-700 block mb-2">
                Email
              </label>

              <input
                type="email" 
                {...register('email', {required: 'Email is required'})}
                placeholder="Email"
                className="w-full h-12 rounded-md border border-gray-300 px-4 outline-none focus:border-[#C7EA46] transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700 block mb-2">
                Password
              </label>

              <input
                type="password"
                {...register('password', {required: 'Password is required'})} 
                placeholder="Password"
                className="w-full h-12 rounded-md border border-gray-300 px-4 outline-none focus:border-[#C7EA46] transition-all"
              />
            </div>

            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

            {/* Forgot */}
            <div className="-mt-1">
              <a
                href="/"
                className="text-sm text-gray-500 hover:text-black underline"
              >
                Forget Password?
              </a>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-12 rounded-md bg-[#C7EA46] hover:bg-[#b7dc37] transition-all font-semibold text-black"
            >
              Login
            </motion.button>
          </form>

          {/* Register */}
          <div className="mt-5 text-sm text-gray-500">
            Don’t have any account?{" "}
            <Link
              to={'/register'}
              className="text-[#9BB92F] font-medium hover:underline"
            >
              Register
            </Link>
          </div>

          {/* OR */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Google Login */}
          <button className="w-full h-12 rounded-md bg-[#F1F3F6] hover:bg-[#e9edf1] transition-all flex items-center justify-center gap-3 text-sm font-medium text-gray-700" onClick={handleGoogleSignIn}>
            <FcGoogle size={20} />
            Login with google
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-[#EEF0E3] relative overflow-hidden">
        {/* background glow */}
        <div className="absolute w-[500px] h-[500px] bg-lime-300/20 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <img
            src={deliveryImg}
            alt="delivery"
            className="w-[70%] xl:w-[75%] mx-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}