/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import './Movies.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ title, category }) => {
    const [apiData, setApiData] = useState([]);
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWU3M2RlNmQzNGQzYTVmMTJkNDU5MGI4NzE4YmQ1ZSIsInN1YiI6IjY2NGY1MDE3ZGRjYzlhM2RlZmRkNDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwiW14KVUxDf_4cElMiFZqhXc4JSscawwTLOmSsINpM',
      },
    };
  
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}`, options)
        .then((response) => response.json())
        .then((response) => setApiData(response.results))
        .catch((err) => console.error(err));
    }, [category, options]);
  
    return (
      <div className='movies-cards'>
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className='card-movies'>
          {apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default Movies