import React from 'react'
import './New.css'

function New(props) {


  return (
    <div className='newStyle'>
        <img src={props.article.urlToImage}/>
        <h2>{props.article.title}</h2>
        <p>{props.article.description}</p>
        <button className='readMore' onClick={() => window.open(props.article.url)}>Read More</button>
    </div>
  )
}

export default New