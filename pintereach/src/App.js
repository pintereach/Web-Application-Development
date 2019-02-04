import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authenticate from "./components/auth/auth";
import Logout from "./components/logout/logout";
import { connect } from "react-redux";
import { pinteReach } from "./actions";

class App extends Component {
  componentDidMount() {
    // this.props.pinteReach();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
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
