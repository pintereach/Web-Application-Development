import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { postAuthLogin } from "../../actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logIn = e => {
    e.preventDefault();
    const creds = (this.state.username, this.state.password);
    localStorage.setItem("creds", creds);
    window.location.reload();
  };

  componentDidMount() {}

  render() {
    console.log(localStorage);
    return (
      <Form>
        <Label>Log In Page</Label>
        <FormGroup>
          <Label for="loginUsername">Username</Label>
          <Input
            onChange={this.handleChanges}
            type="username"
            name="username"
            value={this.state.username}
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password</Label>
          <Input
            onChange={this.handleChanges}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
        </FormGroup>
        <Button className="btn" onClick={this.logIn}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
