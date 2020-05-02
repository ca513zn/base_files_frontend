import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/reducers/auth";

const Login = (props) => {
  let { login } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      login({
        username: username,
        password: password,
      });
      setAttempts(attempts + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your username..."
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password ass..."
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {attempts >= 1
              ? "Oh no. Wrong credentials. Attempts (" + attempts + ")"
              : null}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.Auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(login(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
