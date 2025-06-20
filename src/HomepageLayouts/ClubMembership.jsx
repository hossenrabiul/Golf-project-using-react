import React from "react";
import { Link } from "react-router-dom";

const ClubMembership = () => {
  return (
    <div class="py-12 px-6 text-center mt-10">
      <h2 class="text-3xl font-bold text-[#152229] mb-2">Club Membership</h2>
      <h6 class="text-[#e26824] text-sm uppercase tracking-widest font-semibold mb-8">
        Select the Best Plan
      </h6>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* <!-- Membership Card --> */}
        <div class="hover:shadow-lg transition min-h-[340px] max-w-[250px] bg-white rounded-xl shadow-md">
          <h6 class="bg-[#e26824] text-white text-lg font-semibold py-4 px-3 mb-4">
            Junior
          </h6>
          <div class="flex flex-col justify-between p-6">
            <div class="text-3xl font-bold text-green-700 px- mb-12">
              <span class="text-base align-top">$</span>250
              <span class="text-sm text-gray-500">/mth</span>
            </div>
            <p class="text-gray-600 text-sm px- mb-15 font-bold">
              Save $98 every year compared to the monthly plan by paying yearly.
            </p>
            <Link
              to={`/planDetails/${'standard'}`}
              class="block bg-[#e26824] text-white py-4 px-0 font-medium hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* <!-- Membership Card --> */}
        <div class="hover:shadow-lg transition min-h-[340px] max-w-[250px] bg-white rounded-xl shadow-md">
          <h6 class="bg-[#e26824] text-white text-lg font-semibold py-4 px-3 mb-4">
            Indiviul
          </h6>
          <div class="flex flex-col justify-between p-6">
            <div class="text-3xl font-bold text-green-700 px- mb-12">
              <span class="text-base align-top">$</span>350
              <span class="text-sm text-gray-500">/mth</span>
            </div>
            <p class="text-gray-600 text-sm px- mb-15 font-bold">
              Save $98 every year compared to the monthly plan by paying yearly.
            </p>
            <Link
              to={`/planDetails/${'pro'}`}
              class="block bg-[#e26824] text-white py-4 px-0 font-medium hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* <!-- Membership Card --> */}
        <div class="hover:shadow-lg transition min-h-[340px] max-w-[250px] bg-white rounded-xl shadow-md">
          <h6 class="bg-[#e26824] text-white text-lg font-semibold py-4 px-3 mb-4">
            Family
          </h6>
          <div class="flex flex-col justify-between p-6">
            <div class="text-3xl font-bold text-green-700 px- mb-12">
              <span class="text-base align-top">$</span>290
              <span class="text-sm text-gray-500">/mth</span>
            </div>
            <p class="text-gray-600 text-sm px- mb-15 font-bold">
              Save $98 every year compared to the monthly plan by paying yearly.
            </p>
            <Link
              to={`/planDetails/${'family'}`}
              class="block bg-[#e26824] text-white py-4 px-0 font-medium hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* <!-- Membership Card --> */}
        <div class="hover:shadow-lg transition min-h-[340px] max-w-[250px] bg-white rounded-xl shadow-md">
          <h6 class="bg-[#e26824] text-white text-lg font-semibold py-4 px-3 mb-4">
            Friends
          </h6>
          <div class="flex flex-col justify-between p-6">
            <div class="text-3xl font-bold text-green-700 px- mb-12">
              <span class="text-base align-top">$</span>450
              <span class="text-sm text-gray-500">/mth</span>
            </div>
            <p class="text-gray-600 text-sm px- mb-15 font-bold">
              Save $98 every year compared to the monthly plan by paying yearly.
            </p>
            <Link
              to={`/planDetails/${'pro'}`}
              class="block bg-[#e26824] text-white py-4 px-0 font-medium hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubMembership;
