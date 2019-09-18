import React from 'react';
import './Entry.css';

function Entry(props) {
  return (
    <div className="Entry">
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <h3>{props.name}</h3>
         {/* props.logo */}
        <p><img src={`https://placeimg.com/128/128/tech`} alt={`${props.name} Logo`} /></p>
      </a>
      <p>Job Listings: {props.numJobListings}</p>
    </div>
  );
}

export default Entry;
