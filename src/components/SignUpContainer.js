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
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('Signup form submitted!')
    this.props.signup(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    })
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