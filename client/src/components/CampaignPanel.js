import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'

class CampaignPanel extends Component {

  parsedContent = () => JSON.parse(this.props.content)

  render() {
    const campaignHTML = this.props.content ?
      { __html: stateToHTML(convertFromRaw(this.parsedContent())) } : null

    return (
      <Segment attached='bottom' padded='very'>
        <div dangerouslySetInnerHTML={campaignHTML} />
      </Segment>
    )
  }
}

export default CampaignPanel
