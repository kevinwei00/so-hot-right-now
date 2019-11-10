import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Route exact path="/" component={Footer} />
    </div>
  );
}
