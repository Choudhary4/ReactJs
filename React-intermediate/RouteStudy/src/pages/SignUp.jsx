import React from 'react'
import Template from '../components/Template'
import signUpImage from '../assets/signup.png'

export default function SignUp({setIsLoggedIn}) {
  return (
    <div>
      <Template 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      type='signup'
      image={signUpImage}
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}
