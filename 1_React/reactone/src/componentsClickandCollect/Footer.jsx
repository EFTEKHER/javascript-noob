import React from 'react'

const Footer = () => {
    const date= new Date();
    const year=date.getFullYear();
  return (
    <footer className=' bottom-0 w-full h-[40px] flex flex-col lg:flex-row bg-violet-900 text-white'>
        <h2 className='font-xl text-center mx-auto my-auto tracking-widest leading-relaxed'>Eftes E-commerce &copy; {year} </h2>
      
    </footer>
  )
}

export default Footer
