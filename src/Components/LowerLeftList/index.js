import React from 'react'
import IconEmail from '../../icons/Icon-Email.png'
import IconCalender from '../../icons/Icon-Calendar.png'
import IconMore from '../../icons/Icon-More-1.png'
import './Style.css'
const LowerLeftList = () => {
  return (
    <div className='LowerLeftList'>
        <img src={IconEmail}/>
        <img src={IconCalender}/>
        <img src={IconCalender}/>
        <img src={IconMore} className='rrr'/>
    </div>
  )
}

export default LowerLeftList