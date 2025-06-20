import React from "react";
import web from '../assets/Images/istockphoto-2135726811-612x612.webp'
import men from '../assets/Images/marvin-meyer-746EqwdJjjU-unsplash.jpg'

const About = () => {
  return (
    <div>
      <div class="bg-[#f7f5f1] w-full py-12 mt-5 px-30">
        <h1 class="ml- text-xl font-medium text-[#141e32]">Aboout us</h1>
      </div>

      <div class="mt-10 relative w-9/12 mx-auto mb-20">
        <div class="">
          {/* <!-- image part --> */}
          <div class="w-3/4">
            <img
              class="h-[450px] w-[600px]"
              src={web}
              alt=""
            />
          </div>
          {/* <!-- Content part --> */}
          <div class="bg-[#152229] w-[430px] h-[400px] absolute top-6 right-2 rounded flex items-center justify-center">
            <div class="flex flex-col items-center text-center p-4">
              <h2 class="text-white text-xl font-semibold mb-2">Welcome</h2>
              <h6 class="text-[#e26824] text-lg mb-2">To our golf Club</h6>
              <p class="text-[#606466] text-sm font-medium">
                Founded in 1964 by a team of professional golf players our club
                is based in one of the most picturesque areas of the country and
                is ideal for family membership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Background Section --> */}
      <div
        class="relative bg-[url('images/bg-1.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center"
        
      >
        {/* <!-- Overlay (optional for better contrast) --> */}
        <div class="absolute inset-0 bg-black/30"></div>

        {/* <!-- Testimonial Card --> */}
        <div class="relative bg-white bg-opacity-95 flex flex-col justify-center items-center rounded-sl max-w-[600px] min-h-[330px] text-center z-10">
          <h2 class="text-2xl md:text-3xl font-bold text-[#152229] mb-6">
            Testimonials
          </h2>

          <p class="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Excellent project that helps discovering young talents and keep us
            healthy. Professional coaches and staff are doing great job!
          </p>
          <div class="text-[#606466] text-sm font-medium">Manager</div>
        </div>
      </div>

      <div class="bg-[#f7f5f1] relative">
        <div class="absolute top-13 right-50 rounded-sm shadow-sm">
          <img
            class="w-[350px] h-full"
            src={men}
            alt=""
          />
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center pr-20">
          {/* <!-- Left (2 columns) --> */}
          <div class="md:col-span-2 space-y-6 px-16 py-32">
            <div>
              <h2 class="text-3xl font-bold text-[#152229] mb-2">
                Golf Field Review
              </h2>
              <h6 class="text-[#e26824] text-sm uppercase font-semibold tracking-wider">
                Unique Instruction
              </h6>
            </div>
            <p class="text-gray-700 leading-relaxed">
              Extensive upgrades and thorough maintenance have made our courts a
              modern, comfortable place for trainings.
            </p>

            {/* <!-- List with Tick Marks --> */}
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-gray-800">
                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No daily water usage
              </li>
              <li class="flex items-start gap-3 text-gray-800">
                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Not affected by freezing weather
              </li>
              <li class="flex items-start gap-3 text-gray-800">
                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                3 Distinct tennis court surface speed-of-play options
              </li>
              <li class="flex items-start gap-3 text-gray-800">
                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Adjustable court speeds that are great for serves
              </li>
            </ul>
          </div>

          {/* <!-- <div class="">
                <img src="styles/Images/marvin-meyer-746EqwdJjjU-unsplash.jpg" alt="">
          </div> --> */}
          {/* <!-- Right (1 column) --> */}
          <div class="bg-black h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
