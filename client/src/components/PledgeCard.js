import React, { Component } from 'react'
import { Card, Form, Input, Button, Label } from 'semantic-ui-react'

export default class PledgeCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <Input fluid
                labelPosition='right'
                placeholder='Amount'
                name='funding_goal'
                type='number'
                min='1'
                onChange={this.handleInputChange}
                >
                  <Label basic>$</Label>
                  <input/>
                  <Label>.00</Label>
                </Input>
              </Form.Field>
              <Button fluid type='submit' content='Pledge' color='green' />
            </Form>
          </Card.Content>
        </Card>
    )
  }
}
