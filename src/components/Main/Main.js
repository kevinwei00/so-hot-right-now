import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EntryContext from '../../EntryContext';
import PropTypes from 'prop-types';
import './Main.css';
import EntryMaster from '../Entry/EntryMaster';
import About from '../About/About';
import FetchAPI from '../../fetchAPI';

export default class Main extends Component {
  state = {
    allCategories: [],
    currentCategory: '',
  };

  handleChange = (currentCategory) => {
    this.setState({ currentCategory });
  };

  handleGetAllCategories = () => {
    FetchAPI.GetAllCategories().then((allCategories) => {
      this.setState({ allCategories });
    });
  };

  componentDidMount = () => {
    this.handleGetAllCategories();
  };

  render() {
    const contextValue = {
      allCategories: this.state.allCategories,
      currentCategory: this.state.currentCategory,
      handleChange: this.handleChange,
    };

    return (
      <main className="Main">
        <EntryContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={EntryMaster} />
            <Route exact path="/about" component={About} />
          </Switch>
        </EntryContext.Provider>
      </main>
    );
  }
}

EntryContext.Provider.propTypes = {
  value: PropTypes.shape({
    currentCategory: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  }),
};

EntryContext.Provider.propTypes = {
  value: PropTypes.object.isRequired,
};
