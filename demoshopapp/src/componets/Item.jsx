import React from 'react'
import './Item.css'
function Item(props) {
  return (
    <div className='mfg-item'>
      <div>{props.name}</div>
      {props.children}
    </div>
  )
}

export default Item
