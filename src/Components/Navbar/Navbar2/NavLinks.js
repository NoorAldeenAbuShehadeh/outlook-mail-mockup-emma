import React from 'react'
import { data } from "./data";

function NavLinks() {
  return (
    <div className='NavLinks'>
      {data.map (item => {
            return <><img src={item.icon}/>
            <h3 className='NavItems'>{item.title}</h3></>
          })}
    </div>
  )
}

export default NavLinks