import React, { Component } from 'react';
import './EntryMaster.css';
import EntryList from '../EntryList/EntryList';
import CategorySelect from '../CategorySelect/CategorySelect';

export default class EntryMaster extends Component {
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
      <section className="EntryMaster">
        <CategorySelect
          handleChange={this.handleChange}
          currentCategory={this.state.currentCategory}
        />
        {this.state.currentCategory && (
          <EntryList
            key={this.state.currentCategory}
            currentCategory={this.state.currentCategory}
          />
        )}
      </section>
    );
  }
}
