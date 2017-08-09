import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Home from './containers/Home'
import LoginForm from './components/LoginForm'
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
            <Route path='/login' component={LoginForm} />
            <Route path='/logout' render={() => <Redirect to='/' />}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
