import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectShowContainer extends Component {
  render() {
    return <div>Show Project</div>
  }
}

function mapStateToProps(state) {
  return {projects: state.projects}
}

export default connect(mapStateToProps)(ProjectShowContainer)
