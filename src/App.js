import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Overview from './components/Overview';
import CategorySelect from './components/CategorySelect';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <CategorySelect />
          <Overview />
        </Main>
        <Footer />
      </div>
    );
  }
}
