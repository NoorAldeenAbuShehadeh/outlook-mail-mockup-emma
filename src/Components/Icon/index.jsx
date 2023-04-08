import React from 'react'
import './master.css'
function Icon({initial, color}) {
  return (
    <div className='icon' style={{color}}> <p>{initial}</p> </div>
  )
}

export default Icon
