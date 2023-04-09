import React from 'react'
import Card from '../Card'
import './master.css'
import Seperator from '../Seperator'
import TitleBar from '../TitleBar'
import SelectedCard from '../SelectedCard'
import { inboxMails } from './data'

function Inbox() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const currentDate = new Date("May 25");
  const currentMonth =  monthNames[currentDate.getMonth()];
  return (
    
    <div className='inbox-container'>

      <TitleBar/>
      <SelectedCard user="Lorem Ipsum" meg="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…"/>

      {inboxMails.map((item)=>
        <>
          {item.month !== currentMonth &&
            <Seperator SepTxt= {item.month}/>}
            
          {item.mails.map((element) => 
            <Card sender={element.sender} time={element.time} msg={element.msg} init={element.senderInitial} color={element.defaultColor}/>
          )}
        </> 
        
        
      )}

    </div>
  )
}

export default Inbox
