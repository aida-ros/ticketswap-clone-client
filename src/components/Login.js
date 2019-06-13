import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main>
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
          <Link to={`events`}>...or proceed without an account</Link>
        </div>
      </main>
    );
  }
}

export default Login;