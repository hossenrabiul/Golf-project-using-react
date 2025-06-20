import React from 'react';
import man1 from '../assets/Images/marvin-meyer-7r2TTdFWqcY-unsplash.jpg'
import man2 from '../assets/Images/ting-tse-wang-AKpDwodhGIE-unsplash.jpg'
const MatchesReview = () => {
    return (
        <div
        class="bg-[#f7f5f1]  grid grid-cols-1 md:grid-cols-2 p-6 rounded-sm"
      >
        {/* <!-- Next Matches Section --> */}
        <div class="bg-[#7e9d10] text-white p-8 w-3/4 ml-10">
          <h2 class="text-2xl font-semibold mb-4 border-b-2">Next Matches</h2>
          <p class="text-sm font-semibold mb-6">
            Most golf matches are played on Sundays from 10 AM to approximately
            2 PM.
          </p>

          {/* <!-- Match Cards --> */}
          <div class="space-y-4">
            {/* <!-- Single Match --> */}
            <div class="flex items-center bg-[#6b8810] p-4 rounded-lg">
              <div class="text-center mr-2">
                <div class="text-4xl font-bold leading-tight">03</div>
                <div class="text-sm uppercase">May</div>
              </div>
              <div>
                <h4 class="font-semibold text-lg">McGladrey Classic</h4>
                <p class="text-sm mb-1">10:00 AM</p>
                <p class="text-sm">Kevin Gonzales - Susan Rogers</p>
              </div>
            </div>

            {/* <!-- Repeat Match Cards --> */}
            <div class="flex items-center bg-[rgb(107,136,16)] p-4 rounded-lg">
              <div class="text-center mr-2">
                <div class="text-4xl font-bold leading-tight">03</div>
                <div class="text-sm uppercase">May</div>
              </div>
              <div>
                <h4 class="font-semibold text-lg">McGladrey Classic</h4>
                <p class="text-sm mb-1">10:00 AM</p>
                <p class="text-sm">Kevin Gonzales - Susan Rogers</p>
              </div>
            </div>

            <div class="flex items-center bg-[#6b8810] p-4 rounded-lg">
              <div class="text-center mr-2">
                <div class="text-4xl font-bold leading-tight">03</div>
                <div class="text-sm uppercase">May</div>
              </div>
              <div>
                <h4 class="font-semibold text-lg">McGladrey Classic</h4>
                <p class="text-sm mb-1">10:00 AM</p>
                <p class="text-sm">Kevin Gonzales - Susan Rogers</p>
              </div>
            </div>

            <div class="flex items-center bg-[#6b8810] p-4 rounded-lg">
              <div class="text-center mr-2">
                <div class="text-4xl font-bold leading-tight">03</div>
                <div class="text-sm uppercase">May</div>
              </div>
              <div>
                <h4 class="font-semibold text-lg">McGladrey Classic</h4>
                <p class="text-sm mb-1">10:00 AM</p>
                <p class="text-sm">Kevin Gonzales - Susan Rogers</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Matches Review Section --> */}
        <div class="p-8 rounded-xl">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800">
            Matches Review
          </h2>
          <p class="text-gray-600 text-sm leading-relaxed">
            We are very excited to go over this exceptional tournament that
            literally left the players and the crowd breathless!
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* <!-- Player 1 Card --> */}
            <div class="rounded-s overflow-hidden">
              <img
                src={man1}
                alt="Kevin Gonzales"
                class="w-full h-48 object-cover"
              />
              <div class="bg-gray-900 text-white p-4 text-center">
                <h3 class="text-lg font-medium whitespace-nowrap truncate">
                  Kevin Gonzales
                </h3>
              </div>
            </div>

            {/* <!-- Match Info Card --> */}
            <div class="p-6 rounded-s flex flex-col justify-center text-center">
              <div class="mb-4 text-gray-700 space-y-2">
                <div class="text-lg font-medium">
                  <span class="block">03 May</span>
                  <span class="block text-sm text-gray-500">10:00 AM</span>
                </div>
                <div class="text-2xl font-bold text-green-700">72 - 69</div>
              </div>
              <div class="mt-2">
                <h3 class="text-lg font-semibold text-gray-800">
                  Sea Ireland Golf Club - Seaside Course
                </h3>
              </div>
            </div>

            {/* <!-- Player 2 Card --> */}
            <div class="rounded-s overflow-hidden">
              <img
                src={man2}
                alt="Susan Rogers"
                class="w-full h-48 object-cover"
              />
              <div class="bg-gray-900 text-white p-4 text-center">
                <h3 class="text-lg font-medium whitespace-nowrap truncate">
                  Susan Rogers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MatchesReview;