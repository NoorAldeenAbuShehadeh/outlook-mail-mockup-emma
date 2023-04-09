import React from 'react'
import UpperLeftList from '../UpperLeftList'
import LowerLeftList from '../LowerLeftList'
import './Style.css'
const LeftSide = () => {
  return (
    <div className='LeftSide'>
        <UpperLeftList />
        <LowerLeftList />
    </div>
  )
}

export default LeftSide