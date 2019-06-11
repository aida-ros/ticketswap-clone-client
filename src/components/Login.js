import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <main>
        <div className="login-form">
          <h1>Log in or create an account</h1>
          <form>
            User name:<br />
            {/* <input type="text" name="username"></input> */}
            Password:<br />
            {/* <input type="password" name="password"></input> */}
            <br />
            {/* <input type="submit" value="Submit">Log in</input> */}
          </form>
        </div>

        <div>
          <Link to={`signup`}>Click here to create an account</Link>
          <br/>
          <Link to={`events`}>...or proceed without an account</Link>
        </div>
      </main>
    );
  }
}

export default Login;