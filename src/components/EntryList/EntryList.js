import React, { Component } from 'react';
import './EntryList.css';
import Entry from '../Entry/Entry';
import EntriesError from '../EntriesError/EntriesError';
import FetchAPI from '../../fetchAPI';
import STORE from '../../store';

export default class EntryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      entries: [],
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
    this.setState({
      isLoading: true,
    });

    Promise.all(this.getEntryPromises(category)).then(
      (resolvedEntryPromises) => {
        const sortedEntries = [...resolvedEntryPromises].sort((a, b) =>
          a.props.numJobListings < b.props.numJobListings ? 1 : -1
        );
        this.setState({
          isLoading: false,
          entries: sortedEntries,
        });
      }
    );
  };

  componentDidMount = () => {
    this.updateEntries(this.props.currentCategory);
  };

  // TODO: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  componentWillReceiveProps = (receivedProps) => {
    this.updateEntries(receivedProps.currentCategory);
  };

  render() {
    return (
      <div className="EntryList">
        <div className="EntryList__InnerContainer">
          {this.state.isLoading && <h2>Loading...</h2>}
          {!this.state.isLoading && (
            <EntriesError>{this.state.entries}</EntriesError>
          )}
        </div>
      </div>
    );
  }
}
