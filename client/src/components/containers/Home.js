import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return <div>Home component</div>
  }
}

function mapStateToProps(state) {
  return {projects: state.projects}
}

export default connect(mapStateToProps)(Home)
