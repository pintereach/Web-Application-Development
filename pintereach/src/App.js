import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authenticate from "./components/auth/auth";

import { connect } from "react-redux";
import { pinteReach } from "./actions";
import { stat } from "fs";

class App extends Component {
  componentDidMount() {
    // this.props.pinteReach();
  }

  render() {
    return (
      <div className="App">
        {!this.props.isLoggedIn ? <Authenticate /> : <h1>PinteReach</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  console.log(localStorage);
  return {
    isLoggedIn: state.isLoggedIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
