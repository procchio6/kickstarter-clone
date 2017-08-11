import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProject } from '../actions/projectActions'

class ProjectShowContainer extends Component {

  componentWillMount() {
    const projectId = this.props.match.params.id
    this.props.getProject(projectId)
  }

  render() {
    const project = this.props.project

    return <div>{project.name}</div>
  }
}

function mapStateToProps(state) {
  return {project: state.projects.currentProject}
}

export default connect(mapStateToProps, {getProject})(ProjectShowContainer)
