import React from 'react'
import one from "../assets/one.jpg"
const CardCountry = ({name,img,currency,capital}) => {
  return (
    <div className='h-[400px] flex flex-col w-[350px] bg-slate-700 rounded-lg text-white shadow-xl transform transition-all hover:scale-110 justify-center items-center  hover:shadow-slate-800 p-4'>
      <div className='mx-auto mt-3 mb-3'>
      <img src={img} alt="" className='h-15 w-20 mx-auto  rounded-sm' />
      
      </div>
      <h2 className='text-bold text-2xl font-mono'>Country Name: {name}</h2>   
      <h2 className='text-bold text-xl font-mono'>Currency name: {currency}</h2>   
      <h2 className='text-bold text-xl font-mono'>Capital name: {capital}</h2>   
     

      
    </div>
  )
}

export default CardCountry;

