import React from 'react'
import { data } from "./data";

function Icons() {
  return (
    <div className='Nav-Icons'>
        {data.map (item => {
            return <img src={item.icon}/>
          })}
    </div>
  )
}

export default Icons