import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhoneAndroid } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div>
      <div class="bg-[#f7f5f1] w-full py-12 mt-5 px-30">
        <h1 class="ml- text-5xl font-thin text-[#141e32]">Contacts</h1>
      </div>

      
    <div class="w-10/12 mx-auto mt-20">
      <div
        class="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left"
      >
         {/* Email Info */}
        <div class="flex flex-col items-center md:items-center gap-3">
         
          <BiLogoGmail className="text-6xl text-[#e26824]"></BiLogoGmail>
          <div>
            <p class="text-xl font-thin ">robiulhossen0081@gmail.com</p>
            <p class="text-xl font-thin">www.robiulhossen0081.com</p>
          </div>
        </div>

        {/* Phone Info  */}
        <div class="flex flex-col items-center md:items-center gap-3">
          {/* <i class="fa-solid fa-mobile-screen text-6xl text-[#e26824]"></i> */}
          <MdPhoneAndroid  className="text-6xl text-[#e26824]" ></MdPhoneAndroid>
          <div>
            <p class="text-xl font-thin">++00 01823780816</p>
            <p class="text-xl font-thin">++00 01823780816</p>
          </div>
        </div>

        {/* Address Info  */}
        <div class="flex flex-col items-center md:items-center gap-3">
          <IoHomeOutline className="text-6xl text-[#e26824]"></IoHomeOutline>
          <div>
            <p class="text-xl font-thin">176 Boalkhali Road</p>
            <p class="text-xl font-thin">Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#f7f5f1] py-16 px-6 my-20">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-thin text-[#141e32] mb-4">
          Contact Us
        </h1>
        <p class="text-[#606466] mb-10 text-2xl font-thin">
          We are very excited to go over this exceptional tournament that
          literally left the players and the crowd breathless!
        </p>
        <form
          class="bg-white rounded-sm p-8 space-y-6"
          action="#"
          method="POST"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              class="w-full border border-gray-300 text-[#141e32] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7e9d10]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full border border-gray-300 text-[#141e32] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7e9d10]"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              class="w-full md:col-span-2 border text-[#141e32] border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7e9d10]"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            class="w-full border border-gray-300 text-[#141e32] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7e9d10]"
            required
          ></textarea>
          <button
            type="submit"
            class="bg-[#7e9d10] text-white px-8 py-3 rounded-lg hover:bg-[#6c8910] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
