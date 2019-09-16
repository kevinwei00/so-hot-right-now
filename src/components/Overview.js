import React from 'react';
import Entry from './Entry';

function Overview() {
  const entries = ['entry', 'entry', 'entry'].map((entry, index) => {
    return <Entry key={index} />;
  });

  return <div className="Overview">{entries}</div>;
}

export default Overview;
