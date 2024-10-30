import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {useState} from 'react'

export default function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
   
    
    const [showPassword,setShowPassword] = useState(true)
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Login Success");
        navigate('/dashboard')

    }

  return (
    <div>
      <form onSubmit={submitHandler}
       className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email 
                <sup className="text-pink-200">*</sup>
            </p>
            <input type="email" 
            placeholder='Enter Your Email Id'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            
            />
        </label>
        <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
             Password  
             <sup className="text-pink-200">*</sup>
            </p>
            <input type={showPassword ? "password" : "text"} 
            placeholder='Enter Your Password'
            name='password'
            value={formData.password}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            
            />
            <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">{
                 showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
          }</span>
             <NavLink to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </NavLink>
        </label>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign In</button>
      </form>
    </div>
  )
}
