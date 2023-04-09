import React from 'react'
import LeftSide from '../LeftSide'
import Inbox from '../Inbox'
import './master.css'
import RightBody from '../RightBody/RightBody'

function DonwSection() {
  return (
    <div className='down-section-container'>
      <LeftSide/>
      <Inbox/>
      <RightBody />
    </div>
  )
}

export default DonwSection
