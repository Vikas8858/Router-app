import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
    <NavLink style={(e)=>{
        return{
            color:e.isActive?"tomato":"",
            fontWeight:e.isActive?"bold":"",
        };
    } } to="/">Home</NavLink>
    <NavLink style={(e)=>{
        return{
            color:e.isActive?"green":"",
            fontWeight:e.isActive?"bold":"",
        };
    }}  to="/user">User</NavLink>

    <NavLink  style={(e)=>{
        return{
            color:e.isActive?"blue":"",
            fontWeight:e.isActive?"bold":"",
        };
    }} to="/about">About</NavLink>
   </nav>
  )
}
