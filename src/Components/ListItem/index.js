import React from 'react'
import ListItemTitle from '../ListItemTitle'
import RightArrow from '../../icons/Icon-Arrow-up.png'
import './Style.css'
import Count from '../Count'
const ListItem = () => {
  return (
    <button className='listItem'>
      <span>
        <img src={RightArrow} className='listItemicon'/>
        <ListItemTitle />
      </span>
        <Count />
    </button>
  )
}

export default ListItem