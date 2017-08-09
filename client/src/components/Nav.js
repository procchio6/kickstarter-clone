import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { logoutUser } from '../actions/authActions'

class Nav extends Component {

render() {

  return (
    <Menu inverted fluid borderless fixed='top'>
      <Menu.Item name='explore' as={NavLink} exact to='/' >
         Explore
      </Menu.Item>

      <Menu.Item name='startAProject' as={NavLink} to='/projects/new'>
        Start a Project
      </Menu.Item>

      <Menu.Item header>
        KICKSTARTER
      </Menu.Item>

        {this.props.auth.loggedIn ?
          <Menu.Menu position='right'>
            <Menu.Item name='myProjects' as={NavLink} to='/projects/me'>
              My Projects
            </Menu.Item>
            <Menu.Item name='logout' as={NavLink} to='/logout' onClick={this.props.logoutUser}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        :
          <Menu.Menu position='right'>
            <Menu.Item name='login' as={NavLink} to='/login' >
              Login
            </Menu.Item>
          </Menu.Menu>
        }
    </Menu>
  )
}
}

function mapStateToProps({auth}) {
  return {auth}
}

export default connect(mapStateToProps, {logoutUser})(Nav)
