import React from 'react'
import ListItem from '../ListItem'
const UpperLeftList = () => {
  let ListData = [['Favorites','Icon-Arrow-up.png',0],['Folders','Icon-Arrow-down.png',0],
  ['Inbox','Icon-Inbox.png',0],['Junk Email','Icon-Arrow-down Copy.png',9],['Drafts','Icon-Junk Copy.png',0],
  ['Sent Items','Icon-Sent.png',0],['Scheduled','icon clock.png',0],
  ['Deleted Items','Icon-Trash.png',6],['Archive','Icon-archive.png',0],['Notes','Icon-Notes.png',0]];
  return (
    <div>
      {ListData.map((item,index)=>{
        return <ListItem title={item[0]} iconSrc={item[1]} count={item[2]}/>
      })}
    </div>
  )
}

export default UpperLeftList