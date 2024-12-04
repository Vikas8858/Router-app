import React from 'react'
import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';
import { Route, Routes } from 'react-router-dom';
import UserDetails from '../components/UserDetails';

export default function Routing() {
  return (
  
        <Routes>

<Route path='/'element={<Home />} />
<Route path='/user'element={<User />} >
<Route path='/user/:name'element={<UserDetails />} />
</Route>
<Route path='/about'element={<About />} />

</Routes>
    
  )
}
