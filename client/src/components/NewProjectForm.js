import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form, Grid, Header, Icon, Input, Label, Message } from 'semantic-ui-react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      funding_goal: '',
      fund_by_date: moment(),
      category_id: ''
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDateChange = (date) => {
    this.setState({
      fund_by_date: date
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={12} tablet={8} computer={6} largeScreen={5} >
          <Card fluid>
            {/*this.props.auth.errors.length > 0 ?
              <Message content='Username or password is incorrect!' error attached /> : null
            */}
            <Card.Content header='Create Project' />
            <Card.Content>
              <Form onSubmit={this.handleSubmit}>

                <Form.Field>
                  <label>Name</label>
                  <input
                    name='name'
                    placeholder='Give your project a name...'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Description</label>
                  <input
                    name='description'
                    type='text'
                    placeholder='Short description of your project...'
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Funding Goal</label>
                  <Input
                    labelPosition='right'
                    type='text'
                    placeholder='Amount'
                    name='funding_goal'
                    type='number'
                    value={this.state.funding_goal}
                    onChange={this.handleInputChange}
                  >
                    <Label basic>$</Label>
                    <input/>
                    <Label>.00</Label>
                  </Input>
                </Form.Field>

                <Form.Field>
                  <label>Fund By</label>
                  <DatePicker
                    selected={this.state.fund_by_date}
                    onChange={this.handleDateChange}
                    minDate={moment()}
                  />
                </Form.Field>

                <Button
                  type='submit'
                  color='green'
                >
                  Create Project
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {...state.newProjectForm}
}

export default connect(mapStateToProps, null)(LoginForm)
