import React, { Component } from 'react';
import './Overview.css';
import EntryList from '../EntryList/EntryList';
import CategorySelect from '../CategorySelect/CategorySelect';

export default class Overview extends Component {
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
      <section className="Overview">
        <CategorySelect handleChange={this.handleChange} />
        {this.state.currentCategory && <EntryList key={this.state.currentCategory} currentCategory={this.state.currentCategory} />}
      </section>
    );
  }
}
