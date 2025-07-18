import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Payment = () => {
  const {inTotal} = useContext(AuthContext)

  const payment = () => {
    fetch("https://sporting-server-phi.vercel.app/payment/pay/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ amount: inTotal, currency: "BDT" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.payment_url) {
          window.location.href = data.payment_url;
        } else {
          console.log("error", data);
        }
      })
      .catch((error) => console.log("Error", error));
  };

  useEffect(()=> {
    payment()
  },[])
  return <div>

  </div>;
};

export default Payment;
