import React from "react";
import {Form, Label, Input} from 'reactstrap'



class Login extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  componentDidMount() {
    if (localStorage.getItem("username")) {
      this.setState({
        usernameInput: JSON.parse(localStorage.getItem("username"))
      });
    }
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    if(this.state.usernameInput && this.state.passwordInput){
      localStorage.setItem("username", JSON.stringify(this.state.usernameInput));
      this.setState({
        usernameInput: "",
        passwordInput: ""
      })
    }

  };

  render() {
    return (
      
      <div id="login">
        <Form onSubmit={this.login}>
          <Label for="username">Username</Label>
          <Input
            placeholder="username"
            type="text"
            name="usernameInput"
            id="username"
            onChange={this.handleChanges}
            value={this.state.usernameInput}
          />
          <Label for="password">Password</Label>
          <Input
            placeholder="password"
            type="password"
            name="passwordInput"
            id="password"
            onChange={this.handleChanges}
            value={this.state.passwordInput}
          />
          <button onClick={this.login}>Login</button>
        </Form>
      </div>
    );
  }
}

export default Login;
