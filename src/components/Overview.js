import React from 'react';
import Entry from './Entry';
import FetchAPI from '../fetchAPI';
import STORE from '../store';

function Overview(props) {
  const currentCategory = STORE[props.category];
  const entries = Object.entries(currentCategory.list).map((entry) => {
    let entryKey = entry[0];
    let entryInfo = entry[1];
    return (
      <Entry
        key={entryKey}
        name={entryInfo.name}
        logo={entryInfo.logo}
        website={entryInfo.website}
        jobListings={FetchAPI.GetNumJobListingsFor(entryInfo.keywords)}
      />
    );
  });

  // sort entries by total job listings

  return <div className="Overview">{entries}</div>;
}

export default Overview;
