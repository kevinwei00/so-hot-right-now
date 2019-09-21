import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Footer from '../Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Overview />
        <Footer />
      </div>
    );
  }
}
