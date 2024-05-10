import React, { useEffect, useState } from 'react'
import CardCountry from './CardCountry';


const Countries = () => {
 const [Countries,setCountries] =useState([]);
 console.log(Countries);
 useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>setCountries(data));
 },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-slate-500 text-white gap-x-8 gap-y-9'>
      {
        Countries.map((country)=><CardCountry key={country.name.common} name={country.name.common} img={country.flags.png} currency={'usd'} capital={country.capital}/>)
      }
    </div>
  )
}

export default Countries
