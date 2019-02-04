import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authenticate from "./components/auth/auth";
import Logout from "./components/logout/logout";
import { connect } from "react-redux";
import { pinteReach } from "./actions";
import Register from "./components/register/register";

class App extends Component {
  componentDidMount() {
    // this.props.pinteReach();
  }

  render() {
    return (
      <div className="App">
        <Register />
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    pinteReach
  }
)(Authenticate(App));
