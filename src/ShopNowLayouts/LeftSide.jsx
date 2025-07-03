import React from "react";
import glabs1 from "../assets/Images/shope-images/product-6-300x300.jpg";
import ball from "../assets/Images/shope-images/product-7-300x300.jpg";
import glabs2 from "../assets/Images/shope-images/product-9-300x300.jpg";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
const LeftSide = ({ categories }) => {
  console.log(categories);
  return (
    <div className="md:w-full lg:w-[330px] bg-[#f7f5f1]  pl-8 space-y-10 py-10">
      {/* Categories  */}
      <div>
        <h5 class="text-xl font-semibold text-[#152229] mb-6">
          Product Categories
        </h5>
        <ul class="space-y-4 text-[#606466] font-medium">
          {categories.map((category) => (
            <li className="flex gap-2 items-center">
              <IoIosArrowForward></IoIosArrowForward>
              {category.name}
            </li>
          ))}
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Club Sets
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Drivers
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Fairway Woods
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Golf Balls
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Golf Clothing
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Golf GPS
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Golf Shoes
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Irons
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Putters
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Sales and Deals
          </li>
        </ul>
      </div>

      {/* Filter by Size  */}
      <div>
        {/* <form>
          <h5 class="text-lg font-semibold text-[#152229] mb-4">
            Filter by Size
          </h5>

            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>

        </form> */}

        <ul class="space-y-2 text-[#606466]">
          <li class="flex items-center gap-3">
            <input
              type="radio"
              name="size"
              value="L"
              class="w-4 h-4 text-white"
              
            />
            L (2)
          </li>
          <li class="flex items-center gap-3">
            <input
              type="radio"
              name="size"
              value="L"
              class="w-4 h-4 text-green-600"
             
            />
            M (2)
          </li>
          <li class="flex items-center gap-3">
            <input
              type="radio"
              name="size"
              value="X"
              class="w-4 h-4 text-green-600"
           
            />
            X (2)
          </li>
          <li class="flex items-center gap-3">
            <input
              type="radio"
              name="size"
              value="XL"
              class="w-4 h-4 text-green-600"
          
            />
            XL (2)
          </li>
          <li class="flex items-center gap-3">
            <input
              type="radio"
              name="size"
              value="XLL"
              class="w-4 h-4 text-green-600"
             
            />
            XLL (2)
          </li>
        </ul>
      </div>
      {/* Filter by Color  */}
      <div>
        <h5 class="text-lg font-semibold text-[#152229] mb-4">
          Filter by Color
        </h5>
        <ul class="space-y-2 text-[#606466]">
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            Black
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            Blue
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            White
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            Multi
          </li>
          <li class="flex items-center gap-3">
            <svg
              class="w-4 h-4 text-[#7e9d10]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            Yello
          </li>
        </ul>
      </div>

      {/* Recent Reviews  */}
      <div>
        <h5 class="text-lg font-semibold text-[#152229] mb-4">
          Recent Reviews
        </h5>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img class="w-20 h-25 object-cover rounded" src={glabs1} alt="" />
            <div>
              <h6 class="text-sm font-medium text-[#152229] mb-3 w-[90px]">
                Titleist Pro V2 Practice 21 Golf Balls
              </h6>
              <p class="text-[#e26824] font-bold text-sm">$550</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <img class="w-20 h-25 object-cover rounded" src={glabs2} alt="" />
            <div>
              <h6 class="text-sm font-medium text-[#152229] mb-3 w-[90px]">
                2014 TaylorMade Project (a) Stabd
              </h6>
              <p class="text-[#e26824] font-bold text-sm">$320</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <img class="w-20 h-25 object-cover rounded" src={ball} alt="" />
            <div>
              <h6 class="text-sm font-medium text-[#152229] mb-3 w-[90px]">
                Callaway Men's X2 Hot Iron Set
              </h6>
              <p class="text-[#e26824] font-bold text-sm">$199</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Search Box --> */}
      <div>
        <input
          class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7e9d10]"
          type="text"
          placeholder="Search products..."
        />
      </div>
    </div>
  );
};

export default LeftSide;
