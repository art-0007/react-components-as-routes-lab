import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1>Directors Page</h1>
        {directors.map((director, ind) => 
          <div key={ind}>
           <h4>Name: {director.name}</h4>
            <ul>
              {director.movies.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          
          )}
    </div>
  );
}

export default Directors
