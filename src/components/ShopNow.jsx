import React, { useEffect, useState } from "react";
import LeftSide from "../ShopNowLayouts/LeftSide";
import RightSide from "../ShopNowLayouts/RightSide";


const ShopNow = () => {
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/category/categoryView/')
    .then(res => res.json())
    .then(data => {
      setCategory(data.results)
      // console.log(category)
    })
    .catch(error => console.log(error))
  }, [])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/posts/postlist/')
    .then(res => res.json())
    .then(data => {
      setProduct(data)
      console.log(data)
    })
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <div class="bg-[#f7f5f1] w-full py-12 mt-5 px-30 mb-10">
        <h1 class="ml- text-xl font-medium text-[#141e32]">Shop now</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side */}
            <LeftSide categories={category}></LeftSide>
            <RightSide products={product}></RightSide>
        </div>
        
      </div>
    </div>
  );
};

export default ShopNow;
