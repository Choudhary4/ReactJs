import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { toast } from "react-hot-toast";

export default function Navbar(props) {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <div>
        <img src={Logo} alt="" />
      </div>
      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
            <li>
             <NavLink to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/about'> About</NavLink>
            </li>
            <li>
            <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedIn && (  
            <NavLink to='/login'><button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button></NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to='/signup'><button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button></NavLink>
        )}
        {isLoggedIn && (
        <NavLink to='/'><button   onClick={() => {
          setIsLoggedIn(false);
          toast.success("Logout Sucessfully");
        }} className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log Out</button></NavLink>
        )}
        {isLoggedIn && (
            <NavLink to='/dashboard'><button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button></NavLink>
        )}

          
      </div>
    </div>
  )
}
