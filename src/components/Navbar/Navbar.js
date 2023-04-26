import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './navbar.css'
import logo from '../.././assets/logo.svg'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar section_padding'>

      {/* links */}
      <div className='navbar_links'>
        <div className='navbar_links-logo' id='logo'>
          <img src={logo} />
        </div>
        <div className='navbar_links-container'>
          <p className='underline_hover'><a href='#home'>Home</a></p>
          <p className='underline_hover'><a href='#wgpt3'>What is GPT3?</a></p>
          <p className='underline_hover'><a href='#features'>Case Studies</a></p>
          <p className='underline_hover'><a href='#possibility'>Open AI</a></p>
          <p className='underline_hover'><a href='#blog'>Library</a></p>
        </div>
      </div>

      {/* sign */}
      <div className='navbar_sign'>
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>  

      {/* menu */}
      <div className='navbar_menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          (<div className='navbar_menu-container scale-up-tr'>
            <div className='navbar_menu-container-links'>
              <p onClick={()=> setToggleMenu(false)}><a href='#home'>Home</a></p>
              <p onClick={()=> setToggleMenu(false)}><a href='#wgpt3'>What is GPT3?</a></p>
              <p onClick={()=> setToggleMenu(false)}><a href='#possibility'>Open AI</a></p>
              <p onClick={()=> setToggleMenu(false)}><a href='#feature'>Case Studies</a></p>
              <p onClick={()=> setToggleMenu(false)}><a href='#blog'>Library</a></p>
            </div>
            <div className='navbar_menu-container-sign'>
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Navbar
