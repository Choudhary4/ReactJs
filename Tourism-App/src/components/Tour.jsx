import React from 'react'
import Card from './Card'

function Tour(props) {
    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }
  return (
    <div>
       {

props.tours.map((tour) => {
    return <Card {...tour} key={tour.id} removeTour={removeHandler} />;
})
       
       }
      <Card ></Card>
    </div>
  )
}

export default Tour
