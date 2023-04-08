import React from 'react'
import './index.css'
import Restart from '../../../assets/Icon/UI/restart.png'
import DoubleRestart from '../../../assets/Icon/UI/restart Copy.png'
import CombinedShape from '../../../assets/Combined Shape.png'
import More from '../../../assets/Icon-More.png'

const EmailIcons = () => {
  return (
    <div className='IconsContainer'>
      <img src={Restart}/>
      <img src={DoubleRestart}/>
      <img src={CombinedShape}/>
      <img src={More}/>
    </div>
  )
}

export default EmailIcons