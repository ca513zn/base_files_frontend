import React from "react";
import { connect } from "react-redux";
import LoggedInHome from './LoggedIn'
const Home = (props) => {
  let { loggedIn } = props;

  return (
    <>
    {loggedIn && <LoggedInHome />}
    {!loggedIn && <div>Hello !</div>}
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.Auth.loggedIn,
    user: state.Auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
