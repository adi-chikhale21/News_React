import React, { useEffect, useRef, useState } from 'react'
import New from './New';
import './News.css'

function News() {
    let api = '65368c018088478681c87d2cff9bd2da';
    let [inp,setInp] = useState('tesla');
    let[news,setNews] = useState([])
    let Selectinp = useRef(null);

    useEffect(()=> {
        getNews();
    },[inp])

    useEffect(()=> {
        getNews();
    },[])

    async function getNews(){
        let apiUrl = `https://newsapi.org/v2/everything?q=${inp}&from=2024-06-26&sortBy=publishedAt&apiKey=${api}`
        const response = await fetch(apiUrl);
        const news = await response.json();
        console.log(apiUrl);
        setNews(news.articles || []);
    }

    function handleClick(e){
        e.preventDefault();
        setInp(Selectinp.current.value)
    }
  return (
    <div className='News'>
        <h2 style={{fontFamily: 'monospace',fontSize: '3rem',textAlign: 'left'}}>New Daily</h2>
    <form onSubmit={handleClick}>
        <input ref={Selectinp}/>
        <button onClick={handleClick}>Search</button>
    </form>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2,48%)', justifyContent: 'space-between',rowGap: '20px'}}>
        {news.map((n,i) => {return(<New key={i} article={n}/>)})}
    </div>
    </div>
  )
}

export default News