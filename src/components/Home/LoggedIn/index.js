import React from "react";
import { connect } from "react-redux";

const LoggedInHome = (props) => {
  let { user } = props;
  return (
    <>
    
    </>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHome);
