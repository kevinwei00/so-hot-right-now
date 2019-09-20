import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FireStart from '../Fire/FireStart';

export default class App extends Component {
  componentDidMount = () => {
    FireStart.StartFireAnim();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
