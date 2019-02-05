import React, { Component } from "react";
import Login from "../login/login";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("creds")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      console.log(this.state.loggedIn);
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;
