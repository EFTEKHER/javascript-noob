import React from 'react'
import one from "../assets/one.jpg"
const Card = ({name,img}) => {
  return (
    <div className='h-[400px] flex flex-col w-[350px] bg-slate-700 rounded-lg text-white shadow-xl transform transition-all hover:scale-110 justify-center items-center  hover:shadow-slate-800 p-4'>
      <div className='mx-auto mt-3'>
      <img src={img} alt="" className='h-20 w-20 mx-auto  rounded-full' />
      
      </div>
      <h2 className='text-bold text-2xl font-mono'>{name}</h2>   
      
      <div className='bg-violet-900 rounded-lg'>
      <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum, blanditiis fugiat veritatis dolores debitis, tempora amet quaerat non vel voluptas? Aspernatur nostrum esse laboriosam!</p>
      </div>

      <button className='bg-pink-600 absolute bottom-4 w-40 p-2 hover:scale-95 shadow-lg rounded hover:shadow-pink-900 '>Contact now</button>
    </div>
  )
}

export default Card
