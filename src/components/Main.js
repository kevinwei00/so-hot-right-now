import React, { Component } from 'react';
import Overview from './Overview';
import CategorySelect from './CategorySelect';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: 'authentication',
    };
  }

  handleChange = (selectedCategory) => {
    this.setState({
      currentCategory: selectedCategory,
    });
  };

  render() {
    return (
      <main className="Main">
        <CategorySelect handleChange={this.handleChange} />
        <Overview category={this.state.currentCategory} />
      </main>
    );
  }
}

Main.defaultProps = {};
