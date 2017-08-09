import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Home from './containers/Home'
import Nav from './components/Nav'
import ProjectsContainer from './containers/ProjectsContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Nav} />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={ProjectsContainer} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
