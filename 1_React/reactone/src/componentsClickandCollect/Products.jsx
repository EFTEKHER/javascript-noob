import { BsCartPlus } from "react-icons/bs";
import React from "react";
import {Rating} from '@material-tailwind/react'
const Products = ({_id,name,category,price,rating,img ,addTocart}) => {
  return (
    <div className="flex flex-col w-[300px] h-auto rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-400 m-5 bg-slate-200  relative space-y-">
      <div className=" start-0 ">
        <img
          src={img}
          alt=""
          className="object-contain h-30 w-30"
        />
        <span className="font-bold absolute end-1 text-white top-2 bg-orange-700 rounded-tl-2xl rounded-br-xl p-1">
          Category:{category}
        </span>
      </div>
      <div className="w-full bg-white p-4">
      <div className="flex items-center gap-2 font-bold text-blue-gray-500">
      {rating}
      <Rating value={parseInt(rating)} className="flex text-violet-400" readonly />
     
    </div>
      <h2 className="leading-relaxed text-2xl">{name}</h2>
      <p>
        price: $<span>{price}</span>
      </p>
      <button className="bg-violet-700 w-full flex text-white p-3 rounded-md  " onClick={()=>addTocart(_id,name,category,price,rating,img)}>
      
        <BsCartPlus size={20} />     Add to cart
      </button>
      </div>
    </div>
  );
};

export default Products;
