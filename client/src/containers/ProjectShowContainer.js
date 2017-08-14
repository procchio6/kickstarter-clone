import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Image, Sticky } from 'semantic-ui-react'
import accounting from 'accounting'

import { getProject } from '../actions/projectActions'
import { createPledge } from '../actions/pledgeActions'

import PledgeCard from '../components/PledgeCard'
import ProjectDetailsPanel from './ProjectDetailsPanel'
import ProjectStats from '../components/ProjectStats'

class ProjectShowContainer extends Component {

  state = {}

  componentDidMount() {
    window.scrollTo(0, 0)
    const projectId = this.props.match.params.id
    this.props.getProject(projectId)
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const project = this.props.project
    const pledgeTotal = accounting.formatMoney(project.pledge_total, '$', 0)
    const fundingGoal = accounting.formatMoney(project.funding_goal, '$', 0)
    const numOfBackers = project.number_of_backers ? project.number_of_backers : '0'
    const daysLeft = project.days_left ? project.days_left : '0'

    const statistics = [
      {label: `pledged of ${fundingGoal} goal`, value: `${pledgeTotal}`},
      {label: 'backers', value: `${numOfBackers}`},
      {label: 'days to go', value: `${daysLeft}`}
    ]

    const { contextRef } = this.state

    return (
      <div ref={this.handleContextRef}>
        <Grid>
          <Grid.Column width={12}>
            <Header as='h1'>{project.name}</Header>
            <p>{project.description}</p>
            <Image fluid src='http://lorempixel.com/400/200/technics' />
            <ProjectDetailsPanel project={project}/>
          </Grid.Column>
          <Grid.Column width={4} >
            <div className='projectShowSidebar'>
              <Sticky offset={80} context={contextRef}>
                <ProjectStats statistics={statistics} percent_funded={project.percent_funded}/>
                <PledgeCard
                  projectId={project.id}
                  onCreatePledge={this.props.createPledge}
                  disabled={project.days_left <= 0}
                />
              </Sticky>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {project: state.projects.currentProject}
}

export default connect(mapStateToProps, {getProject, createPledge})(ProjectShowContainer)
