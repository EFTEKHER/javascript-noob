import React, { useEffect, useState } from 'react'
import Card from './Card';

const NewsPaper = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        async function fetchTeslaNews() {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-16&sortBy=publishedAt&apiKey=fe10bfed9b7841c2953c6f44f65d2095');
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Error fetching Tesla news:', error);
                // Handle error as needed
            }
        }
        
        fetchTeslaNews();
    },[])
    console.log(news)
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 '>
    {news.length > 0 ? (
        news.map((allNews, i) => (
            <Card
                key={i}
                urlToImage={allNews.urlToImage}
                author={allNews.author}
                content={allNews.content}
                description={allNews.description}
                publishedAt={allNews.publishedAt}
                title={allNews.title}
                url={allNews.url}
            />
        ))
    ) : (
        <p>Loading...</p>
    )}
    </div>
  )
}

export default NewsPaper
