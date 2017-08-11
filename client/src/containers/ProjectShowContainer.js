import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button, Card, Form, Grid, Header, Input, Image, Label,
  Menu, Progress, Segment, Statistic, Sticky
} from 'semantic-ui-react'

import { getProject } from '../actions/projectActions'

import PledgeCard from '../components/PledgeCard'
import ProjectStats from '../components/ProjectStats'

class ProjectShowContainer extends Component {

  componentWillMount() {
    const projectId = this.props.match.params.id
    this.props.getProject(projectId)
  }

  render() {
    const project = this.props.project

    const statistics = [
      {label: 'pledged of $40,000 goal', value: '$20,000'},
      {label: 'backers', value: '1,250'},
      {label: 'days to go', value: '12'}
    ]

    return (
      <Grid>
        <Grid.Column width={12}>
          <Header as='h1'>{project.name}</Header>
          <p>{project.description}</p>
          <Image fluid src='http://lorempixel.com/400/200/technics' />
          <Menu attached='top' tabular>
            <Menu.Item name='Campaign' active/>
            <Menu.Item name='FAQ' />
            <Menu.Item name='Comments' />
            <Menu.Item name='Backers' />
          </Menu>
          <Segment attached='bottom'>
            <Header as='h2'>Section 1</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu fermentum lectus. Etiam nisl lacus, mattis et massa sollicitudin, dictum placerat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nulla augue, semper eget arcu vel, gravida suscipit urna. Suspendisse egestas lorem at sapien luctus, sed rutrum est porttitor. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Praesent laoreet leo vel dictum mattis. Pellentesque non pellentesque eros. In vehicula et felis sed feugiat. Ut augue ipsum, ornare in elit nec, iaculis imperdiet diam. Nulla aliquam justo ut ex porta, id hendrerit sem suscipit. Nulla facilisi. Nulla ac mattis felis. Proin eget porttitor sem. Morbi vitae lacus sed arcu egestas lacinia facilisis ut tortor. Ut ultrices scelerisque lectus ut lobortis.

Vestibulum at dui non mauris lobortis fringilla sed ut augue. Vivamus congue varius tellus sed accumsan. Donec sit amet hendrerit quam, eu volutpat nulla. Curabitur tempus nec elit in efficitur. Suspendisse pharetra tincidunt gravida. Sed rhoncus eros id sapien ornare, sed rutrum ante finibus. Vivamus id risus ac dolor hendrerit molestie.

Nullam quis sagittis tellus. Fusce quis ultricies tortor. Aliquam feugiat posuere risus, ut dictum ante placerat id. Pellentesque pharetra magna nec augue dictum, at dictum odio placerat. In pretium nulla sit amet justo varius, vel malesuada elit venenatis. Donec blandit pulvinar risus. Nullam ullamcorper nibh non arcu aliquam finibus. Sed et bibendum felis. Mauris vel dictum turpis, in cursus massa. Suspendisse lobortis rhoncus diam et semper.

Maecenas aliquet interdum lectus eu bibendum. Phasellus dictum rutrum mauris, eu suscipit tortor eleifend quis. Fusce tincidunt viverra nunc, et mollis ipsum mattis a. Cras dignissim at dolor imperdiet dapibus. Etiam sodales iaculis risus rutrum pretium. Etiam at neque dignissim, scelerisque erat a, tincidunt lorem. Sed vel massa velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras pulvinar lorem tempor, blandit est sit amet, dapibus lectus. Duis convallis at tellus non finibus.</p>
<Header as='h2'>Section 2</Header>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu fermentum lectus. Etiam nisl lacus, mattis et massa sollicitudin, dictum placerat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nulla augue, semper eget arcu vel, gravida suscipit urna. Suspendisse egestas lorem at sapien luctus, sed rutrum est porttitor. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Praesent laoreet leo vel dictum mattis. Pellentesque non pellentesque eros. In vehicula et felis sed feugiat. Ut augue ipsum, ornare in elit nec, iaculis imperdiet diam. Nulla aliquam justo ut ex porta, id hendrerit sem suscipit. Nulla facilisi. Nulla ac mattis felis. Proin eget porttitor sem. Morbi vitae lacus sed arcu egestas lacinia facilisis ut tortor. Ut ultrices scelerisque lectus ut lobortis.

Vestibulum at dui non mauris lobortis fringilla sed ut augue. Vivamus congue varius tellus sed accumsan. Donec sit amet hendrerit quam, eu volutpat nulla. Curabitur tempus nec elit in efficitur. Suspendisse pharetra tincidunt gravida. Sed rhoncus eros id sapien ornare, sed rutrum ante finibus. Vivamus id risus ac dolor hendrerit molestie.

Nullam quis sagittis tellus. Fusce quis ultricies tortor. Aliquam feugiat posuere risus, ut dictum ante placerat id. Pellentesque pharetra magna nec augue dictum, at dictum odio placerat. In pretium nulla sit amet justo varius, vel malesuada elit venenatis. Donec blandit pulvinar risus. Nullam ullamcorper nibh non arcu aliquam finibus. Sed et bibendum felis. Mauris vel dictum turpis, in cursus massa. Suspendisse lobortis rhoncus diam et semper.

Maecenas aliquet interdum lectus eu bibendum. Phasellus dictum rutrum mauris, eu suscipit tortor eleifend quis. Fusce tincidunt viverra nunc, et mollis ipsum mattis a. Cras dignissim at dolor imperdiet dapibus. Etiam sodales iaculis risus rutrum pretium. Etiam at neque dignissim, scelerisque erat a, tincidunt lorem. Sed vel massa velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras pulvinar lorem tempor, blandit est sit amet, dapibus lectus. Duis convallis at tellus non finibus.</p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className='projectShowSidebar' >
            <ProjectStats statistics={statistics}/>
            <PledgeCard />
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {project: state.projects.currentProject}
}

export default connect(mapStateToProps, {getProject})(ProjectShowContainer)
