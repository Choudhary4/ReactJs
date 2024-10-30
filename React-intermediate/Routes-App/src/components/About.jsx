import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  function changeHandler(){
    navigate(-1)
  }
  return (
    
    <div className="flex flex-col items-center justify-center h-full space-y-6">
    <div className="text-center text-2xl font-semibold text-gray-800">
      This Is About Page
    </div>
  
    <button 
      onClick={changeHandler} 
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Move Back
    </button>
  </div>
  
  )
}
