import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './master.css'

function TitleBar() {
  return (
    <div className='title-bar'>
      <div className='first-sec-title-bar'>
        <CheckCircleOutlineIcon sx={{color: "RGB(96, 94, 92)", fontSize: "1.3rem"}}/>
        <span>Inbox</span>
        <StarOutlineRoundedIcon className='star' sx={{fontSize: "1.5rem"}}/>
        
      </div>      
      <div className='second-sec-title-bar'>
        <span>Filter</span>
        <KeyboardArrowDownIcon/>
      </div>      
    </div>
  )
}

export default TitleBar
