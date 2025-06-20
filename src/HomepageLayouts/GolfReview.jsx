import React from 'react';

const GolfReview = () => {
    return (
        //    <!-- Golf Field Review section -->
      <div class="bg-[#f7f5f1]">
        <div
          class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center pr-20"
        >
          {/* <!-- Left (2 columns) --> */}
          <div class="md:col-span-2 space-y-6 px-16 py-32">
            <div>
              <h2 class="text-3xl font-bold text-[#152229] mb-2">
                Golf Field Review
              </h2>
              <h6
                class="text-[#e26824] text-sm uppercase font-semibold tracking-wider"
              >
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

          {/* <!-- Right (1 column) --> */}
          <div class="bg-black h-full w-full"></div>
        </div>
      </div>
    );
};

export default GolfReview;