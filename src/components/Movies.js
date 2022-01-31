import React from 'react';
import './Movie.css'

const API_IMAGES = 'https://image.tmdb.org/t/p/w1280'
function Movies({title, overview ,poster_path ,vote_average}) {
  return <div className='movie'>
      <img src={API_IMAGES+poster_path}alt={title}/>
      <div className='info'>
      <h3>{title}</h3>
      <span>{vote_average}</span>
      <div className='over'>
          <h3>Overview</h3>
          <h2>{title}</h2>
          <p>{overview}</p>
      </div>
      </div>
  </div>;
}

export default Movies;
