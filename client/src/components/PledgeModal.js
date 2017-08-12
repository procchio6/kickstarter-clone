import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class PledgeModal extends Component {
  render() {
    return (
      <Modal trigger={this.props.trigger} size='mini' open={this.props.open}>

        <Modal.Header>Confirm pledge of ${this.props.amount}?</Modal.Header>

        <Modal.Actions>
          <Button positive onClick={this.props.onConfirmPledge}>Yes</Button>
          <Button negative onClick={this.props.handleClose}>No</Button>
        </Modal.Actions>

      </Modal>
    )
  }
}

export default PledgeModal
