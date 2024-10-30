import React from 'react'
import './ItemDate.css'
function ItemDate(props) {
  return (
    <div className='mfg-itemDate'>
      <span> {props.day}</span>
      <span> {props.month}</span>
      <span> {props.year}</span>
    </div>
  )
}

export default ItemDate
