import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const LeftSide = () => {
  const { products, removeCart, removeIndiviulProduct } =
    useContext(AuthContext);
  // console.log(products)

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex justify-between p-4 bg-gray-800 rounded-xl shadow text-white">
        <Link
          to="/shopnow"
          className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Continue Shopping
        </Link>
        <button
          onClick={removeCart}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Empty Cart
        </button>
      </div>

      {/* Product Items */}
      {products.map((product, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl shadow-sm p-5 bg-white space-y-4"
        >
          <div className="flex gap-5">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-28 h-28 object-cover rounded-lg border"
            />

            {/* Product Details */}
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-700">Item by Arrow-Theme</p>
                </div>
                <button
                  onClick={() => removeIndiviulProduct(product)}
                  className="bg-red-500 text-white text-sm px-3 py-1.5 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>

              {/* Extra Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">License:</span>{" "}
                  Regular License
                </p>
                <p>
                  <span className="font-medium text-gray-700">Support:</span> 6
                  Months Support
                </p>
                <p>
                  <span className="font-medium text-gray-700">
                    Estimated Delivery:
                  </span>{" "}
                  1–3 Business Days
                </p>
              </div>

              {/* Pricing Details */}
              <div className="flex justify-between items-center pt-2 border-t mt-3 text-sm">
                <div>
                  <p className="mb-2">
                    <span className="font-semibold text-gray-800">Price:</span>{" "}
                    ${product.price}
                  </p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <p className="font-semibold text-gray-800">
                  Subtotal: ${product.price * product.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
