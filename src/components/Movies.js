import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, ind) => 
          <div key={ind}>
           <h4>Title: {movie.title}</h4>
           <h4>Time: {movie.time}</h4>
           
            <ul>
              {movie.genres.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
          
          )}
    </div>
  );
};

export default Movies;
