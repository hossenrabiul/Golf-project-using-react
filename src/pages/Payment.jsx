import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import api from "../api";
const Payment = () => {
  const { inTotal } = useContext(AuthContext);

  const payment = async () => {

    try{
      const res = await api.post("payment/pay/", {amount : inTotal, currency : "BDT"},)
 
      if(res.data.payment_url){
        window.location.href = res.data.payment_url
        // console.log(res.data.payment_url)
      }else{
        console.log(res.data)
      }
    }catch(error){
      console.log(error)
    }
    // fetch("http://127.0.0.1:8000/payment/pay/", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ amount: inTotal, currency: "BDT" }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data)
    //     if (data.payment_url) {

    //       window.location.href = data.payment_url;

    //     } else {
    //       console.log("error", data);
    //     }
    //   })
    //   .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    payment();
  }, []);
  return <div></div>;
};

export default Payment;
