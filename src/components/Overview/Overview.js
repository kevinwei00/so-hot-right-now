import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import EntryList from '../Entry/EntryList';
import CategorySelect from '../Entry/EntrySelect';
import About from '../About/About';

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
      <section className="Main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
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
              </>
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </section>
    );
  }
}
