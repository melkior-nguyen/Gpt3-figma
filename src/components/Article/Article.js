import React from 'react'

import './article.css'

function Article({ imgurl, date, text }) {
    return (
        <div className='article'>
            <div className='article_img'>
                <img src={imgurl}/>
            </div>
            <div className='article_content'>
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
