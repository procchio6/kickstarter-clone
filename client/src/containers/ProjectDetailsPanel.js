import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import ProjectDetailsMenu from '../components/ProjectDetailsMenu'
import CampaignPanel from '../components/CampaignPanel'
import FaqPanel from '../components/FaqPanel'
import CommentPanel from '../components/CommentPanel'
import BackersPanel from '../components/BackersPanel'


export default class ProjectDetailsPanel extends Component {

  render() {
    return (
      <div style={{marginTop: '14px'}}>
        <Route path='/projects/:id' component={ProjectDetailsMenu} />

        <Route exact path='/projects/:id' component={CampaignPanel}/>
        <Route path='/projects/:id/faq' component={FaqPanel}/>
        <Route path='/projects/:id/comments' component={CommentPanel}/>
        <Route path='/projects/:id/backers' component={BackersPanel}/>
      </div>
    )
  }
}
