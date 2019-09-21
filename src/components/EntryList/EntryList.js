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
      return FetchAPI.GetNumJobListingsFor(entryInfo.keywords, entryInfo.useAnd).then(
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
        this.setColumnCount(sortedEntries.length);
      }
    );
  };

  componentDidMount = () => {
    this.updateEntries(this.props.currentCategory);
    window.addEventListener('resize', this.setColumnCount);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setColumnCount);
  }

  setColumnCount = (numEntries) => {
    numEntries =
      typeof numEntries === 'number' ? numEntries : this.state.entries.length;
    let count = numEntries < 3 ? numEntries : 3;
    // window.innerWidth is accurate regardless of orientation
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      if (screenWidth < 1024) {
        // 768px => 4 columns
        count = numEntries < 4 ? numEntries : 4;
      } else {
        // 1024px => 5 columns
        count = numEntries < 5 ? numEntries : 5;
      }
    }
    document.documentElement.style.setProperty(
      '--column-count',
      count.toString()
    );
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
