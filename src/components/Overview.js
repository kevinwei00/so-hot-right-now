import React from 'react';
import Entry from './Entry';
import EntriesError from './EntriesError';
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
        jobListings={jobListings}
      />
    );
  });

  // sort entries by total job listings

  return (
    <div className="Overview">
      <EntriesError>{entries}</EntriesError>
    </div>
  );
}

export default Overview;
