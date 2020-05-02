import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MyNavBar from "./components/NavBar";
import Login from "./components/Login";
import LessonsCreate from "./components/Lessons/Create";
import MiniSafari from "./components/Activity-Preview/index";
import Home from "./components/Home";

import "./styles/app.css";
import "./App.scss";

const App = (props) => {
  let {loggedIn} = props
  return (
    <div>
      <Router>
        <MyNavBar />
        <Route path="/" exact component={Home} />
        {!loggedIn && <Route path="/login" exact component={Login} />}
        {/* {loggedIn && <Redirect from="/login" to="/" />} */}
        <Route path="/lessons/create" exact component={LessonsCreate} />
        <Route path="/preview" exact component={MiniSafari} />
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.Auth.loggedIn,
  };
};

export default connect(mapStateToProps)(App);


// import "./App.scss";
// import React from "react";
// import data from "./testData";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Header from "./components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import MyNavBar from "./components/NavBar";
// import { BrowserRouter as Router } from "react-router-dom";
// import Route from "react-router-dom/Route";
// import Games from "./components/Games";
// import Lessons from "./components/Lessons";
// import CreateLessons from "./components/Lessons/Create";
// const isLoggedIn = data.auth.auth;
// const user = data.auth.username;
// const App = (props) => {
//   const user = "Carlos!";
//   const title = "Welcome back " + user;
//   const money = "222.12";
//   const followers = 112;
//   const messages = [];
//   const niche = "Sales Executive";
//   // const handleClick = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:3333/test");
//   //     console.log(response);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <div className="App">
//       <Router>
//         <MyNavBar />
//         <div className="wrapper">
//           <div className="backpage">
//             <div className="page-title">{title}</div>
//             <div className="DigitalDash">
//               <div>Total Money: ${money}</div>
//               <div>{followers}k followers</div>
//               <div>{messages.length} messages!</div>
//               <div>{niche}</div>
//             </div>
//             <Route path="/" exact component={Home} />
//             <Route path="/games" exact component={Games} />
//             <Route path="/lessons" exact component={Lessons} />
//             <Route path="/lessons/create" exact component={CreateLessons} />
//           </div>
//         </div>
//       </Router>
//     </div>
//   );

//   // const renderContent = () => {
//   //   let content = <div>Loading...</div>;
//   //   isLoggedIn
//   //     ? (content = (
//   // <Router>
//   //   <MyNavBar />
//   //   <Route path="/" exact component={Home} />
//   //   <Route path="/games" exact component={Games} />
//   // </Router>
//   //       ))
//   //     : (content = <Login />);
//   //   return content;
//   // };
//   // return renderContent();
// };

// export default App;
