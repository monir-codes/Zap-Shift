// SendParcel.jsx

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";


const SendParcel = () => {
  const locations = useLoaderData();
  const districts = locations.map((location) => location.district);
  const uniqueDistricts = [...new Set(districts)];
  console.log(locations)
  console.log(uniqueDistricts)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#EAEAEA] min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-[#F5F5F5] rounded-[28px] p-6 md:p-10 lg:p-14"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-[#03373D]"
        >
          Send A Parcel
        </motion.h1>

        <p className="mt-4 text-[#03373D] font-semibold">
          Enter your parcel details
        </p>

        <div className="border-t border-gray-300 my-6"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Parcel Type */}
          <div className="flex items-center gap-8 mb-8">
            <label className="flex items-center gap-2 text-sm text-[#03373D]">
              <input
                type="radio"
                value="Document"
                {...register("parcelType")}
                defaultChecked
                className="accent-lime-500"
              />
              Document
            </label>

            <label className="flex items-center gap-2 text-sm text-[#03373D]">
              <input
                type="radio"
                value="Non-Document"
                {...register("parcelType")}
                className="accent-lime-500"
              />
              Non-Document
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <InputField
              label="Parcel Name"
              placeholder="Parcel Name"
              register={register}
              name="parcelName"
              errors={errors}
            />

            <InputField
              label="Parcel Weight (KG)"
              placeholder="Parcel Weight (KG)"
              register={register}
              name="parcelWeight"
              errors={errors}
            />
          </div>

          {/* Sender + Receiver */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sender */}
            <div>
              <h3 className="font-bold text-[#03373D] mb-5">
                Sender Details
              </h3>

              <div className="space-y-4">
                <InputField
                  label="Sender Name"
                  placeholder="Sender Name"
                  register={register}
                  name="senderName"
                  errors={errors}
                />

                <InputField
                  label="Address"
                  placeholder="Address"
                  register={register}
                  name="senderAddress"
                  errors={errors}
                />

                <InputField
                  label="Sender Phone No"
                  placeholder="Sender Phone No"
                  register={register}
                  name="senderPhone"
                  errors={errors}
                />

                <SelectField
                  label="Your District"
                  name="senderDistrict"
                  register={register}
                  options={districts}
                />

                <TextAreaField
                  label="Pickup Instruction"
                  placeholder="Pickup Instruction"
                  register={register}
                  name="pickupInstruction"
                />
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h3 className="font-bold text-[#03373D] mb-5">
                Receiver Details
              </h3>

              <div className="space-y-4">
                <InputField
                  label="Receiver Name"
                  placeholder="Receiver Name"
                  register={register}
                  name="receiverName"
                  errors={errors}
                />

                <InputField
                  label="Receiver Address"
                  placeholder="Address"
                  register={register}
                  name="receiverAddress"
                  errors={errors}
                />

                <InputField
                  label="Receiver Contact No"
                  placeholder="Receiver Contact No"
                  register={register}
                  name="receiverPhone"
                  errors={errors}
                />

                <SelectField
                  label="Receiver District"
                  name="receiverDistrict"
                  register={register}
                  options={districts}
                />

                <TextAreaField
                  label="Delivery Instruction"
                  placeholder="Delivery Instruction"
                  register={register}
                  name="deliveryInstruction"
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-[#03373D] mt-8">
            * Pickup Time 4pm-7pm Approx.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-6 bg-[#C6E548] hover:bg-[#b6d63f] transition-all duration-300 text-[#03373D] font-bold px-8 py-3 rounded-md shadow-sm"
          >
            Proceed to Confirm Booking
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SendParcel;

/* ---------------------------------------------------------------- */

const InputField = ({
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#03373D] mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { required: `${label} is required` })}
        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all bg-white"
      />

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

/* ---------------------------------------------------------------- */

const SelectField = ({
  label,
  name,
  register,
  options,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#03373D] mb-2">
        {label}
      </label>

      <select
        {...register(name)}
        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all bg-white"
      >
        <option value="">Select your district</option>

        {options.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
  );
};

/* ---------------------------------------------------------------- */

const TextAreaField = ({
  label,
  placeholder,
  register,
  name,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#03373D] mb-2">
        {label}
      </label>

      <textarea
        rows="4"
        placeholder={placeholder}
        {...register(name)}
        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all resize-none bg-white"
      />
    </div>
  );
};