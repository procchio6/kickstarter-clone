import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Card } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'

class Home extends Component {
  render() {
    return (
      <div>
        <Header size='large' dividing>Ending Soon</Header>
        <Card.Group itemsPerRow={3} stackable>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Card.Group>
        <Header size='large' dividing>Almost Funded</Header>
        <Card.Group itemsPerRow={3} stackable>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Card.Group>
        <Header size='large' dividing>New</Header>
        <Card.Group itemsPerRow={3} stackable>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Card.Group>
        <Header size='large' dividing>Popular</Header>
        <Card.Group itemsPerRow={3} stackable>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {projects: state.projects}
}

export default connect(mapStateToProps)(Home)
