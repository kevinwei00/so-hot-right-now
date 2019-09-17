import React from 'react';

function Entry(props) {
  return (
    <div className="Entry">
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <h3>{props.name}</h3>
        <p><img src={props.logo} alt={`${props.name} Logo`} /></p>
      </a>
      <p>Job Listings: {props.numJobListings}</p>
    </div>
  );
}

export default Entry;
