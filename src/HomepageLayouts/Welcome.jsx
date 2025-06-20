import React from 'react';
import handle from '../assets/Images/istockphoto-2135726811-612x612.webp'
const Welcome = () => {
    return (
          <div class="mt-10 relative w-9/12 mx-auto mb-20">
        <div class="">
          {/* <!-- image part --> */}
          <div class="w-3/4">
            <img
              class="h-[450px] w-[600px]"
              src={handle}
              alt=""
            />
          </div>
          {/* <!-- Content part --> */}
          <div
            class="bg-[#152229] w-[430px] h-[400px] absolute top-6 right-2 rounded flex items-center justify-center"
          >
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
    );
};

export default Welcome;