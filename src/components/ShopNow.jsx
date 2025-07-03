import React, { useEffect, useState } from "react";
import LeftSide from "../ShopNowLayouts/LeftSide";
import RightSide from "../ShopNowLayouts/RightSide";

import Slidber from "../Slidber/Slidber";

const ShopNow = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] =  useState('')

  useEffect(() => {
    fetch("https://sporting-server-phi.vercel.app/category/categoryView/")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.results);
        // console.log(category)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://sporting-server-phi.vercel.app/posts/postlist/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/posts/postlist/${selectedCategory}/`)
    .then((res) => res.json())
    .then(data => setProduct(data))
    .catch((error) => console.log(error))
  },[selectedCategory])


  const handlechange = (e)=>{
    setSelectedCategory(e.target.value)
  }


  return (
    <div className="mb-10">
      <div class="bg-[#f7f5f1] w-full py-12 mt-5 px-30 mb-10">
        <h1 class="ml- text-xl font-medium text-[#141e32]">Shop now</h1>
      </div>

      <div className="">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-3">
            <Slidber category={category} handlechange={handlechange} />
          </div>
          <div className="col-span-9">
            <RightSide products={product}></RightSide>
          </div>
        </div>
      </div>

      {/* <div className="max-w-5xl mx-auto px-4">


        <div className="ms-[18rem]">
           <RightSide products={product}></RightSide>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap lg:flex-row gap-12">
      
            <LeftSide categories={category}></LeftSide>
            <RightSide products={product}></RightSide>
    
        </div>
        
      </div> */}
    </div>
  );
};

export default ShopNow;
