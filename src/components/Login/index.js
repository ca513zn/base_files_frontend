import React, { useState } from "react";
const axios = require("axios");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleLogin = async (event) => {
    setAttempts(attempts + 1);
    event.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:3333/auth/login?username=" +
          username +
          "&password=" +
          password
      );
      !response.data.result && alert("u gay");
      console.log(response);
    } catch (error) {
      console.error(error);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password ass..."
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

export default Login;
