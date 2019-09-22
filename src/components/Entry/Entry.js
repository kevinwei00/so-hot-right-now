import React from 'react';
import PropTypes from 'prop-types';
import './Entry.css';

export default function Entry(props) {
  return (
    <div className="Entry">
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <div className="Entry__Logo">
          <img
            className="Entry__Logo__Image"
            src={props.logo}
            alt={`${props.name} Logo`}
          />
        </div>
        <div className="Entry__Name">{props.name}</div>
        <div className="Entry__NumJobs">
          {props.numJobListings === -1 && 'N/A'}
          {props.numJobListings !== -1 && (
            <>
              {'+ '}
              <span className="Entry__NumJobs__Num">
                {props.numJobListings
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </span>{' '}
              jobs
            </>
          )}
        </div>
      </a>
    </div>
  );
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  numJobListings: PropTypes.number.isRequired,
};
