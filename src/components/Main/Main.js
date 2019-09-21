import React, { Component } from 'react';
import './Main.css';
import EntryList from '../EntryList/EntryList';
import CategorySelect from '../CategorySelect/CategorySelect';

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
        {this.state.currentCategory && <EntryList key={this.state.currentCategory} currentCategory={this.state.currentCategory} />}
      </main>
    );
  }
}
