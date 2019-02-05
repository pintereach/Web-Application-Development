import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Home from "./components/pintereach/home";
import Login from "./components/login/login";
import Register from "./components/register/register";

class App extends Component {
  componentDidMount() {
    // this.props.pinteReach();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={Home} />
        <Route />
        {/* {!this.props.isLoggedIn ? <Authenticate /> : <Home />} */}
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

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
