import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MyNavBar from "./components/NavBar";

import "./styles/app.css";

const App = () => {
  return (
    <div>
      <Router>
        <MyNavBar />
        Hey
      </Router>
    </div>
  );
};

export default App;

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
