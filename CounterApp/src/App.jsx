import React, {useState} from 'react'

export default function App() {

  const [count,setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }
  
  function IncrementHandler(){
    setCount(count+1);
  }

  
  function ResetHandler(){
    setCount(0);
  }

  return (
   
    <div className="flex justify-center items-center h-screen flex-col">

      <h2>Increment && Decrement</h2>
      
      <div className='flex justify-center'>
        <button onClick={decrementHandler}>
          -
        </button>
        <div>
         {count}
        </div>
        <button onClick={IncrementHandler}>
          +
        </button>
      </div>
      <div>
        <button onClick={ResetHandler}>
          Reset
        </button>
      </div>
    </div>
  )
}