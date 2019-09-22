import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryContext from '../../CategoryContext';
import PropTypes from 'prop-types';
import './Main.css';
import EntryMaster from '../Entry/EntryMaster';
import About from '../About/About';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: '',
    };
  }

  handleChange = (selectedCategory) => {
    this.setState({
      currentCategory: selectedCategory,
    });
  };

  render() {
    const contextValue = {
      currentCategory: this.state.currentCategory,
      handleChange: this.handleChange,
    };

    return (
      <main className="Main">
        <CategoryContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={EntryMaster} />
            <Route exact path="/about" component={About} />
          </Switch>
        </CategoryContext.Provider>
      </main>
    );
  }
}

CategoryContext.Provider.propTypes = {
  value: PropTypes.shape({
    currentCategory: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  }),
};

CategoryContext.Provider.propTypes = {
  value: PropTypes.object.isRequired,
};
