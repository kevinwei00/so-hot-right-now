import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
