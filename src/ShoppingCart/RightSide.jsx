import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../api";
import Payment from "../pages/Payment";
import { Link, Navigate } from "react-router-dom";

const RightSide = () => {
  const {products, inTotal} = useContext(AuthContext)
  // const [inTotal, setInTotal] = useState(0)


  // useEffect(()=>{
  //   countPrice()
  // },[])

  // const countPrice = ()=>{
  //   let cnt=0;
  //   products.map(product => {
  //       cnt += (product.price * product.quantity)
  //   })
  //   setInTotal(cnt)
  // }

  // const payment = ()=>{

  //   fetch('http://127.0.0.1:8000/payment/pay/',{
  //     method: 'POST',
  //     headers: {'content-type' : 'application/json'},
  //     body: JSON.stringify({amount : inTotal, currency: 'BDT'})
  //   })
  //   .then(res => res.json())
  //   .then(data =>{
  //       if(data.payment_url){
  //         window.location.href = data.payment_url
  //       }
  //       else{
  //         console.log("error", data)
  //       }
  //   })
  //   .catch(error => console.log("Error", error))

  // }
  return (
    <div className="w-full max-w-sm p-4 rounded-2xl shadow-lg bg-white space-y-4">
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-gray-700">Your Cart</h4>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Subtotal</span>
          <span className="text-xl font-bold text-gray-800">${inTotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Total Savings</span>
          <span className="text-green-600 font-medium">-$20</span>
        </div>
      </div>
      <Link to={'/payment'} className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-medium py-2 rounded-xl transition duration-200">
        Secure Checkout
      </Link>
    </div>
  );
};

export default RightSide;
