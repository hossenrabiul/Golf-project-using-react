import React from 'react';
import img1 from '../assets/Images/Golf-img/istockphoto-186591876-612x612.jpg'
import img2 from '../assets/Images/Golf-img/istockphoto-2170940926-1024x1024.jpg'
import img3 from '../assets/Images/Golf-img/mick-de-paola-LUPJoR3OfEg-unsplash.jpg'
import img4 from '../assets/Images/Golf-img/peter-drew-SzSNFsD3wOI-unsplash.jpg'


const LatestPhotos = () => {
    return (
        
    //   <!-- The latest Photos -->

      <div class="text-center pb-12 w-11/12 mx-auto">
        {/* <!-- Section Header --> */}
        <h2 class="text-3xl font-bold text-[#152229] mb-2">
          The Latest Photos
        </h2>
        <h6
          class="text-[#e26824] text-sm uppercase tracking-widest font-semibold mb-8"
        >
          Amazing Photoreportage
        </h6>

        {/* <!-- Photo Grid --> */}
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
          {/* <!-- Image Card --> */}
          <div class="overflow-hidden rounded-s shadow-s group">
            <img
              src={img1}
              alt="Golf Photo"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-s group">
            <img
              src={img2}
              alt="Golf Photo"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-s group">
            <img
              src={img3}
              alt="Golf Photo"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="overflow-hidden rounded-s group">
            <img
              src={img4}
              alt="Golf Photo"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
};

export default LatestPhotos;