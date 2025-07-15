import React, { useState, useEffect } from "react";
import MatchesReview from "./MatchesReview";
import { GiShower } from "react-icons/gi";
import { CiTrophy, CiWifiOn } from "react-icons/ci";
import { TbGolfFilled } from "react-icons/tb";
const bannerImages = [
  "/src/assets/Images/banner-img/allan-nygren--xvKQuNtOhI-unsplash.jpg",
  "/src/assets/Images/banner-img/banner.jpg",
  "/src/assets/Images/banner-img/welcome-08Ipbe8GpWw-unsplash.jpg",
];
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);


  return (
    <div>
      <div
        className="relative h-[500px] w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bannerImages[currentIndex]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl text-white">
            <h5 className="text-xl md:text-2xl text-sky-300 tracking-wider uppercase mb-2 animate-pulse">
              Now Accepting
            </h5>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Online Reservation
            </h2>

            <p className="text-lg text-gray-200 font-medium mb-6">
              Book your tee time today! Booking one of our Golf Club’s finest
              courses has never been easier.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                Book Tee Times
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-green-900 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
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
