import { useState } from 'react'
import Tour from './components/Tour'
import data from './data'



function App() {
  const [tours,setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
function refreshHandler(){
  setTours(data)
}
  if(tours.length == 0){
    return (
      <div onClick={refreshHandler}>
        refresh
      </div>
    )
  }

  return (
    <div>
      <div> Plan With Love</div>
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  )
}

export default App
