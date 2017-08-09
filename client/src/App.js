import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Home from './containers/Home'
import LoginForm from './components/LoginForm'
import Nav from './components/Nav'
import ProjectsContainer from './containers/ProjectsContainer'

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Nav} />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={ProjectsContainer} />
            <Route path='/login'
              render={() => (
                this.props.auth.loggedIn ? <Redirect to='/' /> : <LoginForm />
              )}
            />
            <Route path='/logout' render={() => <Redirect to='/' />}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(App);
