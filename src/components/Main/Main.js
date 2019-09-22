import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import EntryMaster from '../EntryMaster/EntryMaster';
import About from '../About/About';

export default function Main() {
  return (
    <main className="Main">
      <Switch>
        <Route exact path="/" component={EntryMaster} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
  );
}
