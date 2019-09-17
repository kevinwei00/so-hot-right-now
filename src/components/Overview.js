import React, { Component } from 'react';
import Entry from './Entry';
import EntriesError from './EntriesError';
import FetchAPI from '../fetchAPI';
import STORE from '../store';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: 'Loading...',
    };
  }

  getEntryPromises = (category) => {
    return Object.entries(STORE[category].list).map((entry) => {
      const entryKey = entry[0];
      const entryInfo = entry[1];
      return FetchAPI.GetNumJobListingsFor(entryInfo.keywords).then(
        (resultNumJobListings) => {
          return (
            <Entry
              key={entryKey}
              name={entryInfo.name}
              logo={entryInfo.logo}
              website={entryInfo.website}
              numJobListings={resultNumJobListings}
            />
          );
        }
      );
    });
  };

  updateEntries = (category) => {
    Promise.all(this.getEntryPromises(category)).then(
      (resolvedEntryPromises) => {
        // sort entries by total job listings
        this.setState({
          entries: resolvedEntryPromises,
        });
      }
    );
  };

  componentDidMount = () => {
    this.updateEntries(this.props.currentCategory);
  };

  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  componentWillReceiveProps = (receivedProps) => {
    this.setState({
      entries: 'Loading...',
    });
    this.updateEntries(receivedProps.currentCategory);
  };

  render() {
    return (
      <div className="Overview">
        <EntriesError>{this.state.entries}</EntriesError>
      </div>
    );
  }
}
