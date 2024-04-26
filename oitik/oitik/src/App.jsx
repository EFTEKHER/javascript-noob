import { useState } from 'react'
import oitik from './oitikk.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full flex flex-col space-y-4 '>
    <h2 className='text-4xl mt-4 self-start bg-gradient-to-l from-blue-600 to-green-600 font-bold text-transparent bg-clip-text'>
    Tanbeer jubaer Oitik .
    </h2>
    <div className='w-full  flex flex-wrap md:flex-nowrap bg-violet-500 h-[55vh] rounded-xl shadow-2xl shadow-violet-800  hover:scale-110' >
        <div className='w-1/2' >
        <h2 className='text-2xl leading-relaxed'></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sequi consequuntur eaque molestias impedit! Ipsam quod quaerat veniam commodi nihil, modi rerum dolores quam. Doloribus, quae. Excepturi, veritatis! Aut, rerum?</p>
        </div>
        
        <div className='w-1/2 p-10'>

        <div className='ml-20 p-5 w-80 h-80 bg-pink-500 rounded-full p-auto shadow-2xl shadow-pink-700'>
        <img src={oitik} alt="" className=' w-60 h-60 object-cover ' />
        
        </div>
        
        
        </div>
       
      </div>
    </div>
      
    </>
  )
}

export default App
