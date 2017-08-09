import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {

render() {
  return (
    <Menu inverted fluid borderless fixed='top'>
      <Menu.Item name='explore' exact as={NavLink} to='/' >
         Explore
      </Menu.Item>

      <Menu.Item name='startAProject' as={NavLink} to='/projects/new'>
        Start a Project
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name='login' as={NavLink} to='/login' >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
}

export default Nav
