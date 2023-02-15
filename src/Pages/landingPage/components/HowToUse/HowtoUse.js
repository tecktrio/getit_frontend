import React from 'react'
import './style.css'
function HowtoUse(props) {
  return (
    <div className='howtouse_1'>
      <h4>{props.title}</h4>
      <p>
      {props.description}
      </p>
    </div>
  )
}

export default HowtoUse
