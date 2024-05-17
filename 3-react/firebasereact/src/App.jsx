import { AiFillGoogleCircle } from "react-icons/ai"; 
import { useState } from 'react'

import './App.css'
import {getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initialFirebase from "./Firebase/initalFirebase";


function App() {
 const signinHandler=()=>{
  const provider=new GoogleAuthProvider();
  const auth=getAuth(initialFirebase())
  signInWithPopup(auth,provider).then(result=>{
    const user=result.user;
    console.log(user);
  })
 }

  return (
    <>
     <div className='flex w-full h-[100vh] flex-col bg-purple-500 tracking-widest justify-center items-center'>
     <button className='bg-slate-700 text-white rounded-lg flex p-4' onClick={signinHandler}>Signin with Google <AiFillGoogleCircle size={30} /></button>
     
     </div>
    </>
  )
}

export default App
