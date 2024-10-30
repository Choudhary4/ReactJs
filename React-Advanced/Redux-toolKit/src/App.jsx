import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {


  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-400 animate-backgroundPulse">
    <Counter/>
  </div>
  )
}

export default App
