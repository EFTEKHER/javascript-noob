import { MdOutlineShoppingCartCheckout } from "react-icons/md"; 
import React from 'react'

const Details = props => {
    const products=props.cart;

    let totalprice=0;
    let productname=[];
    for(let product of products)
        {
            totalprice += product.price;
            productname.push(product.name);
        }

  return (
   <div className='bg-slate-700 leading-relaxed tracking-widest sticky text-white flex flex-col shadow-2xl h-[400px] overflow-y-scroll p-6 rounded-2xl mt-4  top-0 z-50'>
   Details 
   <h2>Total selected product:{props.cart.length}</h2>
   <h2>Total price:<span className='h-50 font-bold text-yellow-200'>$ {totalprice}</span></h2>
   <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
   {
    productname.map((p,i)=>{
        return <div className='bg-violet-400 p-2 h-[60px] rounded-md m-2' key={i}>{p}</div>
    })
   }
   </div>
   <button className="bg-violet-700 w-full  flex rounded-lg p-2  ">
   checkout
   <MdOutlineShoppingCartCheckout size={20} className="mt-1 "/>
   
   </button>
   </div>
  )
}

export default Details
