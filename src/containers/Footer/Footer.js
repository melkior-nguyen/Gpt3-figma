import React, { useState, useEffect } from 'react'

import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowBtn(window.scrollY > 780)
    }
    window.addEventListener('scroll', handleScroll)

    return () => (window.removeEventListener('scroll', handleScroll))
  }, [])

  return (
    <div>
      {showBtn && <button className='gototop_btn'><a href='#home'>Goto Top</a></button>}
      <div className='footer section_padding'>

        <div className='footer_heading'>
          <h1 className='gradient_text'>Do you want to step in to the <br />future before others</h1>
        </div>

        <div className='footer_btn'>
          <p>Request Early Access</p>
        </div>

        <div className='footer_links'>
          <div className='footer_links-div'>
            <img src={logo} />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='footer_links-div'>
            <h2>Links</h2>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='footer_links-div'>
            <h2>Company</h2>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='footer_links-div'>
            <h2>Get in touch</h2>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>

        <div className='footer_copytight'>
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
