// import bag1 from "../assets/Images/shope-images/image-10-600x600.jpg";
// import bag2 from "../assets/Images/shope-images/product-3-300x300.jpg";
// import handle1 from "../assets/Images/shope-images/product_1-300x300.jpg";
// import handle2 from "../assets/Images/shope-images/product-2-300x300.jpg";
// import ballbag1 from "../assets/Images/shope-images/product-4-300x300.jpg";
// import ballstan from "../assets/Images/shope-images/product-5-300x300.jpg";
// import glabs1 from "../assets/Images/shope-images/product-6-300x300.jpg";
// import ball from "../assets/Images/shope-images/product-7-300x300.jpg";
// import glabs2 from "../assets/Images/shope-images/product-9-300x300.jpg";
// import { key } from "localforage";

import { useContext } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import Recommended from "../Recommended/Recommended";

const RightSide = ({ products }) => {
  console.log(products);

  const { addProduct } = useContext(AuthContext);

  return (
    <div className="">
      {/* <div class="flex justify-between">
        <div>
          <h4>Showing all results</h4>
      
        </div>

        <div class="">
          <select
            defaultValue="Server location"
            className="select select-neutral"
          >
            <option disabled={true}>Defoult sorting</option>
            <option>North America</option>
            <option>EU west</option>
            <option>South East Asia</option>
          </select>
        </div>
      </div> */}
      <div>
        <Recommended/>
      </div>
      <div class="my-8 border-t-1 text-[#7e9d10] opacity-15"></div>

      <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Product Card */}
        {products.map((product) => (
          <section className="p-5 overflow-hidden border-2 border-[#ededed] cursor-pointer ">
           <Link to={`/details/${product.id}`}>
           <img className="min-h-40 min-w-40" src={product.image} alt="" />
           </Link>
            

            <div>
              <h3 className="font-bold">Elegent Hills</h3>
              <div className="flex text-[#b5ab55] my-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="flex justify-between">
                <div>
                  <del>$100</del> $90
                </div>
                <div>
                  <BsFillBagHeartFill/>
                </div>
              </div>
            </div>
             <button
               onClick={() => addProduct(product)}
               className="mt-5 bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded"
             >
              Add To Cart
             </button>
          </section>
          // <div className="group overflow-hidden transition-transform transform hover:scale-[0.97] hover:shadow-2xl rounded-lg min-h-[400px] flex flex-col justify-between">
          //   <Link to={`/details/${product.id}`} className="">
          //     <img
          //       className="w-full min-h-60 object-cover duration-350 ease-in-out group-hover:scale-90 hover:cursor-pointer"
          //       src={product.image}
          //       alt="Product"
          //     />
          //     <div class="py-4 text-center">
          //       <h3 className="text-gray-800 font-semibold text-lg mb-2">
          //         {product.name}
          //       </h3>
          //       <p className="text-[#e26824] font-bold text-lg">
          //         ${product.price}
          //       </p>
          //     </div>
          //   </Link>
          //   <button
          //     onClick={() => addProduct(product)}
          //     className="mt-0 bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded"
          //   >
          //     Add To Cart
          //   </button>
          // </div>
        ))}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={bag1} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              TaylorMade Stand Bag
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* Repeat for other products  */}
        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={bag2} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Premium Golf Bag
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={handle1} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={handle2} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={ballbag1} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={ballstan} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={glabs1} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}

        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={ball} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}
        {/* <div class="overflow-hidden hover:shadow-lg transition">
          <img class="w-full h-64 object-cover" src={glabs2} alt="Product" />
          <div class="p-4 text-center">
            <h3 class="text-[#152229] font-semibold text-lg mb-2">
              Deluxe Golf Cart
            </h3>
            <p class="text-[#e26824] font-bold text-lg mb-4">$244</p>
            <button class="bg-[#7e9d10] hover:bg-[#6c870e] transition text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightSide;
