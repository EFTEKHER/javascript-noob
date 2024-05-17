import React from 'react'
import Text from './Text'

const Card = ({urlToImage,publishedAt,author,title,description,content,url }) => {
  return (
    
    <div className='flex flex-col  w-[400px] h-auto bg-slate-800 text-white rounded-xl shadow-2xl hover:scale-105 ml-3 mt-3 p-4'>
    <div className='mb-2'> <img src={urlToImage} alt="" className='w-full object-contain rounded-lg' /> </div>
    <h3 className='text-sm font-semibold truncate'>Date:{publishedAt} <span className='text-xl font-bold font-mono text-orange-700 truncate'>By {author}</span></h3>
    <h2 className='text-2xl font-bold'>{title}</h2>
    <p className='text-sm tracking-widest '>{description}</p>
   <Text textContent={content}/>
     <span className='h-15 w-20 rounded-md bg-pink-500 '><a href={url}>Details</a></span> 
    </div>
  )
}

export default Card
