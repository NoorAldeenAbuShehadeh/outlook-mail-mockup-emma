import React from 'react'
import UserName from '../UserName'
import Msg from '../Msg'
import './master.css'

function SelectedCard( {user, meg}) {
  return (
    <div className='card-container selected'>
      <div className='radio-container'><input type="radio" className='radio'/></div>
      <div className='inner-card-container'>
        <UserName sender= {user}/>
        <Msg msg= {meg}/>
      </div>
    </div>
    
  )
}

export default SelectedCard
