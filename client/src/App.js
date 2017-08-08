import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './components/containers/Home'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path='/explore' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
