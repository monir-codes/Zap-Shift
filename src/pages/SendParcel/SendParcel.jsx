// SendParcel.jsx

import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const { register, handleSubmit, control } = useForm();

  const serviceAria = useLoaderData();
  const regionsDuplicate = serviceAria.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegions = useWatch({control, name: "senderRegion"});
  const receiverRegion = useWatch({control, name: "receiverRegion"}); 

  const districtByRegion = (region) => {
    const regionsDistricts = serviceAria.filter((d) => d.region === region);
    const districts = regionsDistricts.map((d) => d.district);
    return districts;
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#EAEAEA] p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-[#F5F5F5] rounded-3xl p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#03373D]">
          Send A Parcel
        </h1>

        <p className="mt-4 font-semibold text-[#03373D]">
          Enter your parcel details
        </p>

        <div className="border-b border-gray-300 my-6"></div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Radio Button */}
          <div className="flex gap-8 mb-8">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                value="Document"
                {...register("type")}
                defaultChecked
              />
              Document
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input type="radio" value="Non-Document" {...register("type")} />
              Non-Document
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div>
              <label className="text-sm font-semibold">Parcel Name</label>

              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName")}
                className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Parcel Weight (KG)
              </label>

              <input
                type="text"
                placeholder="Parcel Weight (KG)"
                {...register("parcelWeight")}
                className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
              />
            </div>
          </div>

          {/* Sender + Receiver */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sender Details */}
            <div>
              <h2 className="font-bold mb-5 text-[#03373D]">Sender Details</h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold">Sender Name</label>

                  <input
                    type="text"
                    placeholder="Sender Name"
                    {...register("senderName")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Address</label>

                  <input
                    type="text"
                    placeholder="Address"
                    {...register("senderAddress")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Sender Phone No
                  </label>

                  <input
                    type="text"
                    placeholder="Sender Phone No"
                    {...register("senderPhone")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Your Region</label>

                  <select
                    {...register("senderRegion")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  >
                    <option>Select your region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold">Your District</label>

                  <select
                    {...register("senderDistrict")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  >
                    <option>Select your district</option>
                    {
                      districtByRegion(senderRegions)?.map((d, i) => (
                        <option key={i} value={d}>
                          {d}
                        </option>
                      ))
                    }
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Pickup Instruction
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Pickup Instruction"
                    {...register("pickupInstruction")}
                    className="w-full border border-gray-300 rounded-md p-4 mt-2 outline-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h2 className="font-bold mb-5 text-[#03373D]">
                Receiver Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold">Receiver Name</label>

                  <input
                    type="text"
                    placeholder="Receiver Name"
                    {...register("receiverName")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Receiver Address
                  </label>

                  <input
                    type="text"
                    placeholder="Address"
                    {...register("receiverAddress")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Receiver Contact No
                  </label>

                  <input
                    type="text"
                    placeholder="Receiver Contact No"
                    {...register("receiverPhone")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Receiver Region
                  </label>

                  <select
                    {...register("receiverRegion")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  >
                    <option>Select your region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Receiver District
                  </label>

                  <select
                    {...register("receiverDistrict")}
                    className="w-full border border-gray-300 rounded-md h-11 px-4 mt-2 outline-none"
                  >
                    <option>Select your district</option>
                    {districtByRegion(receiverRegion)?.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Delivery Instruction
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                    className="w-full border border-gray-300 rounded-md p-4 mt-2 outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="mt-8 text-sm">* Pickup Time 4pm-7pm Approx.</p>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 bg-lime-400 hover:bg-lime-500 transition px-8 py-3 rounded-md font-semibold"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
