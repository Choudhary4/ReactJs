import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {useState} from 'react'

export default function SignUpForm({setIsLoggedIn}) {
   
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [showPassword,setShowPassword] = useState(true)
  const [showPassword2,setShowPassword2] = useState(true)
  const [accountType,setAccountType] = useState("student")

  function changeHandler(event){
    setFormData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
  

  function submitHandler(e){

    e.preventDefault();

    if(formData.password===formData.confirmPassword){
      setIsLoggedIn(true)
      const accountData = {
        ...formData,
      };
      console.log(accountData);
      navigate("/dashboard")
      toast.success("Account Created")
    }else{
      toast.error("Password Not Match")
    }
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>


      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
            <input type="text" 
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter Your FirstName'
            value={formData.firstName}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
            <input type="text" 
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter Your lastName'
            value={formData.lastName}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             />
          </label>
        </div>

        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email <sup className="text-pink-200">*</sup></p>
            <input type="email" 
            name='email'
            onChange={changeHandler}
            placeholder='Enter Your Email'
            value={formData.email}
             className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             />
          </label>

          <div className="flex gap-x-4">

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password  <sup className="text-pink-200">*</sup></p>
            <input type={showPassword ? "password" : "text"} 
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            value={formData.password}
             className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             />
             <span onClick={()=>setShowPassword(!showPassword)}
             className="absolute right-3 top-[38px] cursor-pointer z-10"
              >{showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}</span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input type={showPassword2 ? "password" : "text"} 
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             />
              <span onClick={()=>setShowPassword2(!showPassword2)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
                >{showPassword2 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}</span>
          </label>

          </div>

          <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">Create Account</button>
      </form>
    </div>
  )
}
