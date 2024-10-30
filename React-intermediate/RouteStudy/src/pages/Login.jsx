import React from 'react'
import LoginImage from '../assets/login.png'
import Template from '../components/Template'

export default function Login({setIsLoggedIn}) {
  return (
    <div>
      <Template
      title="Welcome Back"
      desc1='Build skills for today, tomorrow, and beyond.'
      desc2='Education to future-proof your career.'
      image={LoginImage}
      fromType="login"
      setIsLoggedIn={setIsLoggedIn}

      />
    </div>
  )
}
