import React from 'react'

const Banner = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='mt-20 ml-20 '>
      <p className='text-xl font-medium mb-2'>Summer Sell</p>
      <h1 className='text-4xl font-bold mb-2'>upto <span className='text-8xl text-red-700'>70%</span></h1>
      <p className='text-xl font-medium mb-2'>collect your offer using promo code</p>
      <div className='w-[60%] cursor-pointer bg-orange-500 h-10 text-center py-2'><button className='font-semibold'>ASEDFG</button></div>
      <div className='h-35 w-40 p-auto'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#FF156D" stroke="#FF156D"  transform-origin="center" className='w-20 h-20' d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>
      </div>
      </div>

      <div className='mr-0 lg:mr-16 mt-5   mb-2'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/028/636/447/small_2x/set-of-cosmetic-products-with-lavender-flowers-hair-care-products-3d-illustration-photo.jpg" alt="" className='w-[100%] h-[425px] rounded-lg hover:scale-105'/>
      </div>
      
    </div>
  )
}

export default Banner
