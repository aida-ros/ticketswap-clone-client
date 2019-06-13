import React from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { login } from '../actions'

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
    this.props.login(this.state);
    this.setState({
      username: '',
      password: ''
    })
    console.log(this.state)
  };

  render() {
    return (
      <Login
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginContainer);