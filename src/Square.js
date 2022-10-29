import React from 'react'
import "./App.css"

export default function Square(props) {
  return (
    <div className='square' onClick={props.onClick}>
         <h4>{props.value}</h4>
    </div>
  )
}
