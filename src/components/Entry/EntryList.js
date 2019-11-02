import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EntryList.css';
import Entry from './Entry';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import FetchAPI from '../../fetchAPI';
import config from '../../config';

export default class EntryList extends Component {
  state = {
    hasLoaded: false,
    entries: [],
  };

  async updateEntries(category) {
    const allTools = await FetchAPI.GetAllToolsForCategory(category);
    let entries = await allTools.map(async (tool) => {
      const result = await FetchAPI.GetNumJobListings(tool.keywords, tool.useAnd);
      return (
        <Entry
          key={tool.tool_id}
          name={tool.tool_name}
          logo={`${config.API_ENDPOINT}/logos/${tool.logo}`}
          website={tool.website}
          numJobListings={result.totalResults}
        />
      );
    });

    Promise.all(
      entries.map((entry) => entry.then((resolvedEntry) => resolvedEntry))
    ).then((resolvedEntries) => {
      const sortedEntries = [...resolvedEntries].sort((a, b) =>
        a.props.numJobListings < b.props.numJobListings ? 1 : -1
      );
      this.setState({
        hasLoaded: true,
        entries: sortedEntries,
      });
      this.setColumnCount(sortedEntries.length);
    });
  }

  componentDidMount = () => {
    this.updateEntries(this.props.currentCategory);
    window.addEventListener('resize', this.setColumnCount);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setColumnCount);
  };

  setColumnCount = (numEntries) => {
    numEntries = typeof numEntries === 'number' ? numEntries : this.state.entries.length;
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
    document.documentElement.style.setProperty('--column-count', count.toString());
  };

  render() {
    return (
      <div className="EntryList">
        <div className="EntryList__InnerContainer">
          {!this.state.hasLoaded && <h2>Loading...</h2>}
          {this.state.hasLoaded && <ErrorBoundary>{this.state.entries}</ErrorBoundary>}
        </div>
      </div>
    );
  }
}

EntryList.propTypes = {
  currentCategory: PropTypes.string.isRequired,
};
