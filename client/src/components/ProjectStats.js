import React, { Component } from 'react'
import { Card, Progress, Statistic } from 'semantic-ui-react'

export default class ProjectStats extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Progress size='tiny' percent={50} success/>
          <Statistic.Group size='tiny' items={this.props.statistics} />
        </Card.Content>
      </Card>
    )
  }
}
