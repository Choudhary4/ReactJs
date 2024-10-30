import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Item from './componets/item'
import ItemDate from './componets/ItemDate'

function App() {
  
const response = [
  {
    itemName:"Nirma",
    day:"19",
    month:"june",
    year:"2008"
  },
  {
    itemName:"Surf",
    day:"20",
    month:"july",
    year:"2003"
  },
  {
    itemName:"Ghadi",
    day:"09",
    month:"may",
    year:"2010"
  }
]
  return (
    <>
      <div>
        <Item name={response[0].itemName}>Hello Ji</Item>
        <ItemDate day={response[0].day} month={response[0].month} year={response[0].year} ></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].day} month={response[1].month} year={response[1].year} ></ItemDate>
        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].day} month={response[2].month} year={response[2].year} ></ItemDate>
      </div>
    </>
  )
}

export default App
