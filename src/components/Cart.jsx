import React, { useContext } from "react";
import LeftSide from "../ShoppingCart/LeftSide";
import RightSide from "../ShoppingCart/RightSide";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products } = useContext(AuthContext);

  return (
    <div className="my-8">
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 space-y-6 bg-white rounded-xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" 
            alt="Empty Cart"
            className="w-24 h-24 opacity-70"
          />

          <h2 className="text-2xl font-semibold text-gray-800">
            Your cart is empty
          </h2>
          <p className="text-gray-500 max-w-md">
            Looks like you haven’t added anything to your cart yet. Start
            exploring our products and find what you love.
          </p>

          <Link
            to="/shopnow"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <LeftSide></LeftSide>
          </div>
          <div className="col-span-4">
            <RightSide></RightSide>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
