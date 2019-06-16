import React from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { signup } from '../actions/login'

class LoginContainer extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChange = event => {
    console.log(this.state.username, this.state.password)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('Form submitted!')
    this.props.signup(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    })
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <h1 align='center'>Sign up</h1>
        <Login
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  signup
}

export default connect(null, mapDispatchToProps)(LoginContainer);