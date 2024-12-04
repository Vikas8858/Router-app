import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function User() {
  return (
    <div className='w-1/2 m-auto mt-10'>
     
    <h1 className=" text-red-200 text-5xl mb-2">User</h1>
   
    <div className='flex w-1/2 flex-col mt-5'>
      <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/Vikas">Vikas</Link>
      <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/Abhi">Abhi</Link>
      <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/Saurabh">Saurabh</Link>

    </div>
   <hr />
   <Outlet/>

   </div>
  )
}
