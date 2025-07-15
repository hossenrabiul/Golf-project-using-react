import React from 'react';
import man1 from '../assets/Images/marvin-meyer-7r2TTdFWqcY-unsplash.jpg'
import man2 from '../assets/Images/ting-tse-wang-AKpDwodhGIE-unsplash.jpg'
const MatchesReview = () => {
   return (
  <div class="bg-[#f7f5f1] grid grid-cols-1 md:grid-cols-2 p-6 rounded-sm  gap-4">
    {/* <!-- Next Matches Section --> */}
    <div class="bg-[#7e9d10] text-white p-8 w-full md:w-11/12 mx-auto rounded-xl shadow-md">
      <h2 class="text-3xl font-bold mb-4 border-b-2 border-white pb-1">
        🕒 Next Matches
      </h2>
      <p class="text-sm font-medium mb-6">
        Most golf matches are played on Sundays from 10 AM to approximately 2 PM.
      </p>

      {/* <!-- Match Cards --> */}
      <div class="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            class="flex items-center bg-[#6b8810] p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div class="text-center mr-4">
              <div class="text-4xl font-extrabold leading-tight">03</div>
              <div class="text-sm uppercase tracking-wide">May</div>
            </div>
            <div>
              <h4 class="font-semibold text-lg mb-1">McGladrey Classic</h4>
              <p class="text-sm mb-1">10:00 AM</p>
              <p class="text-sm">Kevin Gonzales - Susan Rogers</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <!-- Matches Review Section --> */}
    <div class="p-8 rounded-xl w-full">
      <h2 class="text-3xl font-extrabold mb-4 text-gray-800 underline decoration-green-600 underline-offset-8">
        🏌️ Matches Review
      </h2>
      <p class="text-gray-700 text-[15px] leading-relaxed font-bold mb-4">
        We are very excited to go over this exceptional tournament that
        literally left the players and the crowd breathless!
        We are very excited to go over this exceptional tournament that
        literally left the players and the crowd breathless!
        We are very excited to go over this exceptional tournament that
        literally left the players and the crowd breathless!
       
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* <!-- Player 1 Card --> */}
        <div class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
          <img
            src={man1}
            alt="Kevin Gonzales"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div class="bg-gray-900 text-white p-4 text-center">
            <h3 class="text-lg font-semibold tracking-wide">Kevin Gonzales</h3>
          </div>
        </div>

        {/* <!-- Match Info Card --> */}
        <div class="p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border border-gray-200">
          <div class="mb-4 text-gray-700 space-y-2">
            <div class="text-xl font-semibold">
              <span class="block">03 May</span>
              <span class="block text-sm text-gray-500">10:00 AM</span>
            </div>
            <div class="text-3xl font-bold text-green-700">72 - 69</div>
          </div>
          <div class="mt-2">
            <h3 class="text-lg font-semibold text-gray-800 leading-snug">
              Sea Ireland Golf Club
            </h3>
            <p class="text-sm text-gray-500">Seaside Course</p>
          </div>
        </div>

        {/* <!-- Player 2 Card --> */}
        <div class=" rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
          <img
            src={man2}
            alt="Susan Rogers"
            class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div class="bg-gray-900 text-white p-4 text-center">
            <h3 class="text-lg font-semibold tracking-wide">Susan Rogers</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default MatchesReview;