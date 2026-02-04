import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar'> 
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="Logo" />
        <div className="new-chat">
        <img className='plus' src={assets.plus_icon} alt="" />
        {extended?<p>New Chat</p> :null}
        </div>
      </div>

      {extended?
      <div className="recent">
        <p className="recent-title">Chats</p>
        <div className="recent-entry">
            <img className='plus' src={assets.message_icon} alt="" />
            <p id='react'>What is React and how the use.... </p>
        </div>
      </div> :null}

      <div className="bottom">
        {/* <div className="botttom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
        </div>
        <div className="botttom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
        </div> */}
        <div className="botttom-item recent-entry">
            <img className='setting_icon' src={assets.setting_icon} alt="" />
            {extended?<p id='settings'>Settings & help</p> :null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
