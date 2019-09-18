import React from 'react';
import './Entry.css';

function Entry(props) {
  return (
    <div className="Entry">
      <a href={props.website} target="_blank" rel="noopener noreferrer">
         {/* props.logo */}
        <div className="Entry__Logo"><img src={`https://placeimg.com/128/128/tech`} alt={`${props.name} Logo`} /></div>
        <div className="Entry__Name">{props.name}</div>
      </a>
      <div className="Entry__NumJobs">{props.numJobListings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} jobs</div>
    </div>
  );
}

export default Entry;
