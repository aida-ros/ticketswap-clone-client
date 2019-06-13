import React from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Link } from "react-router-dom";

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
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    })
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <Login
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Link to={`signup`}>Click here to create an account</Link>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginContainer);