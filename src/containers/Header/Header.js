import React from 'react'

import './header.css'
import ai from '../.././assets/ai.png'
import people from '../.././assets/people.png'

function Header() {
  return (
    <header className='header section_padding' id="home">

      {/* content */}
      <div className='header_content'>
        <h1 className='gradient_text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className='header_content-input'>
          <input type="email" placeholder="Your Email Address"/>
          <button>Get Started</button>
        </div>
        <div className='header_content-people'>
          <img src={people}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* Image */}
      <div className='header_img'>
        <img src={ai}/>
      </div>
    </header>
  )
}

export default Header
