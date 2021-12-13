import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

    const [newsData, setNewsData]=useState([]);
    const [author,setAuthor]=useState('');
    const [content,setContent]=useState('');
    const [error, setError]=useState(false);


    useEffect(()=>{
        getData();
    },[])

    const getData = ()=>{
        axios.get('http://localhost:3003/articles')
        .then((res)=>setNewsData(res.data));
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(content.length<140){
            setError(true);
        }else{
            axios.post('http://localhost:3003/articles',{
                author,
                content,
                date:Date.now()
            }).then(()=>{
                setError(false);
                setAuthor('');
                setContent('');
                getData();
            })
        }

    }
    return (
        <div className='news-container'>
            <Navigation/>
            <Logo/>
            <h1>News</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nom' 
                onChange={(e)=>setAuthor(e.target.value)}
                value={author}/>
                <textarea placeholder="Message"
                onChange={(e)=>setContent(e.target.value)}
                value={content}
                style={{border: error? "1px solid red":"1px solid #61dafb"}}/>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
            {newsData
            //trier les dates du + grand au + petit
            .sort((a,b)=>b.date - a.date)
            .map((article)=>(
                <Article key={article.id} article={article}/>
            ))}
            </ul>
        </div>
    );
};

export default News;