import React from "react";
const axios = require('axios');

const Home = (props) => {
  const title = "C-los";
  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:3333/test");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>{`Hello, welcome to ${title}'s site!`}</h1>
      <h3>{`Welcome back, ${props.user}.`}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
