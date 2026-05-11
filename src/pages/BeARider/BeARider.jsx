import { motion } from "framer-motion";
import riderImg from "../../assets/icons/agent-pending.png";

export default function BeARider() {
  return (
    <section className="bg-[#F3F3F3] py-8 md:py-14 px-3 md:px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[28px] p-5 sm:p-8 md:p-12 shadow-sm">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[#003B3F] text-3xl md:text-5xl font-extrabold mb-4">
            Be a Rider
          </h2>

          <p className="text-[#6D6D6D] max-w-3xl leading-7 text-sm md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-[#E7E7E7] pt-7">
              <h3 className="text-[#003B3F] text-2xl font-bold mb-6">
                Tell us about yourself
              </h3>

              <form className="space-y-4">
                
                {/* Input Component */}
                {[
                  "Your Name",
                  "Driving License Number",
                  "Your Email",
                  "NID No",
                  "Phone Number",
                  "Bike Brand Model and Year",
                  "Bike Registration Number",
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      {field}
                    </label>

                    <input
                      type="text"
                      placeholder={field}
                      className="w-full h-11 px-4 rounded-md border border-[#D8DDE3] outline-none bg-white focus:ring-2 focus:ring-[#C4E34F] transition-all duration-200 text-sm"
                    />
                  </div>
                ))}

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Your Region
                  </label>

                  <select className="w-full h-11 px-4 rounded-md border border-[#D8DDE3] outline-none bg-white focus:ring-2 focus:ring-[#C4E34F] transition-all duration-200 text-sm">
                    <option>Select your Region</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Your District
                  </label>

                  <select className="w-full h-11 px-4 rounded-md border border-[#D8DDE3] outline-none bg-white focus:ring-2 focus:ring-[#C4E34F] transition-all duration-200 text-sm">
                    <option>Select your District</option>
                    <option>Dhaka</option>
                    <option>Gazipur</option>
                    <option>Narayanganj</option>
                  </select>
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Tell Us About Yourself
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell Us About Yourself"
                    className="w-full p-4 rounded-md border border-[#D8DDE3] outline-none bg-white focus:ring-2 focus:ring-[#C4E34F] transition-all duration-200 text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-md bg-[#C4E34F] hover:bg-[#b6d742] transition-all duration-300 font-semibold text-black shadow-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>

          {/* Rider Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={riderImg}
              alt="Rider"
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}