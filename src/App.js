import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home.js";
import Private from "./components/Private/Private.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/private' component={Private} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
