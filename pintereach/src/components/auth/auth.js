import React, { Component } from "react";
import Login from "../login/login";
import Register from "../register/register";
import { connect } from "react-redux";

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false
    };
  }

  handleLogin = () => {
    this.setState({ registered: false });
    window.location.reload();
  };

  handleRegister = () => {
    this.setState({ registered: true });
    window.location.reload();
    localStorage.removeItem("token");
  };

  render() {
    if (this.props.isRegistered) {
      return <Register />;
    } else return <Login />;
    {
      console.log(this.props.isRegistered);
    }
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.isRegistered
  };
};

export default connect(
  mapStateToProps,
  {}
)(Authenticate);
