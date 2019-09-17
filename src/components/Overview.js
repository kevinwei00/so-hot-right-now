import React from 'react';
import Entry from './Entry';
import FetchAPI from '../fetchAPI';
import STORE from '../store';

function Overview(props) {
  const currentCategory = STORE[props.category];
  const entries = Object.entries(currentCategory.list).map((entry) => {
    const entryKey = entry[0];
    const entryInfo = entry[1];
    const jobListings = FetchAPI.GetNumJobListingsFor(entryInfo.keywords);
    return (
      <Entry
        key={entryKey}
        name={entryInfo.name}
        logo={entryInfo.logo}
        website={entryInfo.website}
        jobListings={1}
      />
    );
  });

  // sort entries by total job listings

  return <div className="Overview">{entries}</div>;
}

export default Overview;
