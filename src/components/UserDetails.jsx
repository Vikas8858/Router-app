import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetails() {

const {name} =useParams();
const navigate = useNavigate();

const GoBackHandler=() =>{
    //  navigate("/user");
     navigate(-1);
}

  return (
    <div className='w-1/2 m-auto mt-10'>
     
     <h1 className=" text-red-200 text-2xl mb-2">User Details</h1>
      <h1 className='mt-5 text-2xl'>hii! {name}</h1>
    
    <button 
    onClick={GoBackHandler}
    className= 'text-white mt-5  px-3 py-2 bg-red-300'>Go back</button>

    </div>
  )
}
