import React from 'react'
import ListItemTitle from '../ListItemTitle'
import './Style.css'
import Count from '../Count'
const ListItem = ({title,iconSrc,count}) => {
  return (
    <button className='listItem'>
      <span>
        <img src={iconSrc} className='listItemicon'/>
        <ListItemTitle title={title}/>
      </span>
        {count>0 && <Count count={count}/>}
    </button>
  )
}

export default ListItem