import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'
import SafeHTML from 'react-safe-html'

class CampaignPanel extends Component {

  parsedContent = () => JSON.parse(this.props.content)

  render() {
    const campaignHTML = this.props.content ?
      stateToHTML(convertFromRaw(this.parsedContent())) : null

    return (
      <Segment attached='bottom' padded='very'>
        <SafeHTML html={campaignHTML} />
      </Segment>
    )
  }
}

export default CampaignPanel
