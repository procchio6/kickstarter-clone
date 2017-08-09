import React, { Component } from 'react'
import { Button, Card, Form, Grid } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={9}>
          <Card fluid>
            <Card.Content>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Form.Field>
                <Button type='submit' color='green'>Login</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
