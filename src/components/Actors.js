import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, ind) => 
          <div key={ind}>
           <h4>Name: {actor.name}</h4>
            <ul>
              {actor.movies.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          
          )}
    </div>
  );
};

export default Actors;
