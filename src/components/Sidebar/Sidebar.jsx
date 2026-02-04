import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
    document.body.classList.toggle("dark")
  }

  return (
    <div className={`sidebar ${extended ? "open" : "closed"}`}>
      <div className="top">
        <div className="nav-sb">
        <img
          onClick={()=>setExtended(prev=>!prev)}
          className='menu'
          src={assets.menu_icon}
          alt="menu"
        />



        </div>

        <div className="new-chat">
          <img className='plus' src={assets.plus_icon} alt="" />
          {extended ? <p id='chat'>New chat</p> : null}
        </div>
      </div>

      {extended ?
      <div className="recent">
        <p className="recent-title">Chats</p>
        <div className="recent-entry">
          <img className='plus' src={assets.message_icon} alt="" />
          <p id='react'>What is React and how the.... </p>
        </div>
      </div> : null}

      <div className="bottom">
        <div className="botttom-item recent-entry">
          <img className='setting_icon' src={assets.setting_icon} alt="" />
          {extended ? <p id='settings'>Settings & help</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
