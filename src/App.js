import "./App.scss";
import React from "react";
import data from "./testData";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Games from "./components/games";

const isLoggedIn = data.auth.auth;
const user = data.auth.username;
const App = (props) => {
  const renderContent = () => {
    let content = <div>Loading...</div>;
    isLoggedIn ? (content = <Home user={user} />) : (content = <Login />);
    return content;
  };
  return (
    <>
      <Router>
        <MyNavBar />
        <Route path="/games" component={Games}/>
      </Router>
    </>
  );
  // renderContent();
};

export default App;
