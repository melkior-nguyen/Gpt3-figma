import React from 'react'

import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'
import Article from '../../components/Article/Article'

function Blog() {
  return (
    <div className='blog section_padding' id='blog'>
      <div className='blog_heading'>
        <h1 className='gradient_text'>A lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className='blog_container'>
        <div className='blog_container-groupA'>
          <Article imgurl={blog01} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='blog_container-groupB'>
          <Article imgurl={blog02} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={blog03} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={blog04} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={blog05} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
