import React, { Component } from 'react'
import { Card, Image, Progress, Statistic } from 'semantic-ui-react'

class ProjectCard extends Component {
  render() {
    const statistics = [
      {label: 'pledged', value: '$20,000'},
      {label: 'funded', value: '50%'},
      {label: 'days to go', value: '12'}
    ]

    return (
      <Card className='projectCard' link>
        <Image src='http://lorempixel.com/400/200/technics' />
        <Card.Content>
          <Card.Meta>Technology</Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, diam nam consequat,
            tellus sed, consectetuer vel nec odio, vitae sociosqu vivamus,
            euismod justo eget ullamcorper velit vestibulum...
          </Card.Description>
          <Card.Meta className='creator'>
            <Image size='mini' avatar src='http://lorempixel.com/100/100'/>
            <span>by Pat Rocchio</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra className='projectStats'>
          <Progress size='tiny' percent={50} success/>
          <Statistic.Group horizontal size='mini' items={statistics} />
        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard
