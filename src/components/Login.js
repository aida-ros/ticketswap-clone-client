import React from "react";
import { Link } from "react-router-dom";
import '../main.css'

class Login extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main className='form' align='center'>
        <div>
          
          <form onSubmit={onSubmit}>

            <label>
              Username:
          <input
                type="text"
                name="username"
                onChange={onChange}
              />
            </label>
            <br />

            <label>
              Password:
          <input
                type="password"
                name="password"
                onChange={onChange}
              />
            </label>
            <br />

            <button type="submit">Login</button>
          </form>
        </div>

        <br />
        <div>
          <br />
          <Link className='link' to={`signup`}>Click here to create an account</Link>
          <br/>
          ---
          <br/>
          <Link className='link' to={`login`}>Already have an account? Click to log in</Link>
          <br/>
          ---
          <br/> 
          <Link className='link' to={`events`}>Go to events page</Link>
        </div>
      </main>
    );
  }
}

export default Login;