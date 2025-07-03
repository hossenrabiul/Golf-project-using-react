import React from "react";
import MatchesReview from "./MatchesReview";
import { GiShower } from "react-icons/gi";
import { CiTrophy, CiWifiOn } from "react-icons/ci";
import { TbGolfFilled } from "react-icons/tb";
const Banner = () => {
  return (
    <div>
      <div class="bg-[url('/images/banner.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div class="bg-opacity-50 p-6 text-center max-w-2xl items-center justify-center">
          <h5 class="text-2xl font-normal text-white mb-2">Now Accepting</h5>
          <h2 class="text-4xl font-bold text-white mb-4">Online Reservation</h2>
          <p class="text-lg font-medium text-white">
            Book your tee time today! Booking one of our Golf Club’s finest
            courses has never been easier.
          </p>
          <div class="mt-5">
            <button class="bg-green-900 py-4 px-6 rounded-sm text-white mr-6 text-2xl">
              Book tee times
            </button>
            <button class="bg-green-900 py-4 px-6 rounded-sm text-white text-2xl">
              learn more
            </button>
          </div>
        </div>
      </div>

      <div class="bg-[#f7f5f1] p-10">
        <div class="icon-img grid grid-cols-2 md:grid-cols-4">
          <div class="flex flex-col justify-center items-center">
  
            <TbGolfFilled className="w-[80px] h-[80px] text-[#7e9d10]"></TbGolfFilled>
            <h4 class="text-[#152229] font-normal mt-2">Golf Pro Shop</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            
            <CiTrophy className="w-[80px] h-[80px] text-[#7e9d10]"></CiTrophy>
            <h4 class="text-[#152229] font-normal mt-2">Tournament Course</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
          
            <GiShower className="w-[80px] h-[80px] text-[#7e9d10]"></GiShower>
            <h4 class="text-[#152229] font-normal mt-2">Shower And Room</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
         
            <CiWifiOn className="w-[80px] h-[80px] text-[#7e9d10]"></CiWifiOn>
            <h4 class="text-[#152229] font-normal mt-2">Free Wi-Fi</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
