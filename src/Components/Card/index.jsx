import React from 'react'
import Icon from '../Icon'
import UserName from '../UserName'
import Date from '../Date'
import Msg from '../Msg'
import './master.css'

function Card({sender, time, msg, init, color}) {
  return (
    <div className='card-container'>
      <Icon initial={init} cokor={color}/>
      <div className='inner-card-container'>
        <UserName sender={sender}/>
        <Date time={time}/>
        <Msg msg={msg}/>
      </div>
    </div>
  )
}

export default Card
