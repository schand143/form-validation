import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button
} from 'reactstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRegex.test(e.target.value)) {
      validate.emailState = 'check-success';
    } else {
      validate.emailState = 'check-danger';
    }
    this.setState({ validate });
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
    alert('Login success!');
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className='login-form'>
        <h2>Log in</h2>
        <Form className='form'>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type='email'
                name='email'
                id='loginEmail'
                placeholder='sample@email.com'
                value={email}
                valid={this.state.validate.emailState === 'chech-success'}
                invalid={this.state.validate.emailState === 'check-danger'}
                onChange={e => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
              <FormFeedback valid>Checked successfully!</FormFeedback>
              <FormFeedback>Please input a correct email.</FormFeedback>
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for='loginPassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='loginPassword'
                placeholder='********'
                value={password}
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
