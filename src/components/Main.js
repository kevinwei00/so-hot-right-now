import React, { Component } from 'react';
import Overview from './Overview';
import CategorySelect from './CategorySelect';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: null,
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
        {this.state.currentCategory && <Overview currentCategory={this.state.currentCategory} />}
        {!this.state.currentCategory && <h3>Select a category first</h3>}
      </main>
    );
  }
}
