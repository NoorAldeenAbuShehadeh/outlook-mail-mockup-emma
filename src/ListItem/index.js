import React from 'react'
import RightArrow from '../Icon-Arrow-up.png'
import './Style.css'
const ListItem = () => {
  return (
    <div className='listItem'>
        <img src={RightArrow} className='listItemicon'/>
        <p>Favorites</p>
    </div>
  )
}

export default ListItem