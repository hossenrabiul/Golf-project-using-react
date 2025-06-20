import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const product = useLoaderData();
  const { image, name, price } = product;
  console.log(product);
  return (
    <div>
      <div class="bg-[#f7f5f1] w-full py-12 mt-5 px-30">
        <h1 class="ml- text-xl font-medium text-[#141e32]">
          Details about this Product
        </h1>
      </div>

        {/*  Product Detail Section  */}
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row gap-10 items-center">
          {/* < Product Image  */}
          <div class="w-full md:w-1/2">
            <img
              class="rounded w-full max-w-md mx-auto"
              src={image}
              alt="Golf Ball"
            />
          </div>

           {/* Product Info  */}
          <div class="w-full md:w-1/2 space-y-6">
            <h1 class="text-4xl font-bold text-gray-700 w-[350px]">
              {name}
            </h1>
            <p class="text-2xl font-bold text-[#e26824]">${price}</p>
            <p class="text-[#606466] leading-relaxed w-[450px] font-bold">
              Lorem ipsum dolor sit amet, in eum clita civibus erroribus. Ex
              purto probo vel. Cu mundi forensibus delicatissimi vel, wisi clita
              ullamcorper mel an.
            </p>
            <button
              class="bg-[#7e9d10] hover:bg-[#6c8910] text-white px-6 py-3 rounded transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>


      
      {/* Tabs Section  */}
      <div class="bg-[#f7f5f1] py-12 px-4 md:px-20">
         {/* Tab Navigation  */}
        <div
          class="flex flex-wrap gap-6 border-b pb-4 mb-10 text-[#152229] font-semibold"
        >
          <button class="border-b-2 border-[#e26824] text-[#e26824] pb-2">
            Description
          </button>
          <button class="hover:text-[#e26824] transition">
            Additional Information
          </button>
          <button class="hover:text-[#e26824] transition">Reviews</button>
        </div>

         {/* Tab Content  */}
        <div class="text-[#606466] space-y-6 max-w-4xl">
          <h2 class="text-xl font-semibold text-[#152229]">
            Product Description
          </h2>
          <p>
            Lorem ipsum dolor sit amet, in eum clita civibus erroribus. Ex purto
            probo vel. Cu mundi forensibus delicatissimi vel, wisi clita
            ullamcorper mel an. Melius interesset ad quo, ad populo quaeque
            discere duo.
          </p>
          <p>
            An wisi facer facilis ius, in has sonet aliquando. Usu ad nominavi
            perfecto, has labores copiosae petentium no. Electram adolescens qui
            in. Ea eam posse mentitum, pri at putent noster, quo quidam laoreet
            in.
          </p>
          <p>
            Pri ut eirmod aliquid pericula, sit at mucius iriure facilisis.
            Utinam commune vituperatoribus vel at, sit quot nostrum reprehendunt
            id, laboramus definitiones sed an. Cu quo ignota suscipit iracundia.
          </p>
          <p>
            Eos ea tation altera facilisis, id recusabo vulputate nam. Qui an
            nulla option scriptorem. Id commodo forensibus complectitur per, an
            appareat posidonium vix.
          </p>
        </div>
      </div>


        {/* Related products  */}
      <div class="mt-10">
        <div class="py-10 w-10/12 mx-auto">
          <h1 class="mb-6 text-4xl font-thin text-center">Related Products</h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             {/* Product Card */}
            <div class="space-y-4 max-w-sm h-[460px]">
              <img
                class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                src={image}
                alt="Callaway Men’s XR Individual Irons"
              />
              <h3 class="text-lg font-medium">
                Callaway Men’s XR Individual Irons
              </h3>
              <p class="text-gray-600">$344</p>
              <button
                class="bg-[#7e9d10] text-white px-8 py-4 hover:bg-[#6c8910]"
              >
                Add To Cart
              </button>
            </div>

             {/* Repeat for other products */}
            <div class="space-y-4 max-w-sm h-[460px]">
              <img
                class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                src={image}
                alt="Reload Recycled Golf Balls"
              />
              <h3 class="text-lg font-medium">
                Reload Recycled Golf Balls (12-Pack)
              </h3>
              <p class="text-gray-600">$455</p>
              <button
                class="bg-[#7e9d10] text-white px-8 py-4 hover:bg-[#6c8910]"
              >
                Add To Cart
              </button>
            </div>

            <div class="space-y-4 max-w-sm h-[460px]">
              <img
                class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                src={image}
                alt="Golf Ball Holder"
              />
              <h3 class="text-lg font-medium">
                Golf Ball Holder – PRO 13 pack
              </h3>
              <p class="text-gray-600">$344</p>
              <button
                class="bg-[#7e9d10] text-white px-8 py-4 hover:bg-[#6c8910]"
              >
                Add To Cart
              </button>
            </div>

            <div class="space-y-4 max-w-sm h-[460px]">
              <img
                class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                src={image}
                alt="Golf Gloves"
              />
              <h3 class="text-lg font-medium">
                Callaway Men’s Xtreme 365 Golf Gloves
              </h3>
              <p class="text-gray-600">$344</p>
              <button
                class="bg-[#7e9d10] text-white px-8 py-4 hover:bg-[#6c8910]"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};
export default Details;
