import React from "react";

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
      <div>
        <form onSubmit={this.login}>
          <input
            placeholder="username"
            type="text"
            name="usernameInput"
            onChange={this.handleChanges}
            value={this.state.usernameInput}
          />
          <input
            placeholder="password"
            type="password"
            name="passwordInput"
            onChange={this.handleChanges}
            value={this.state.passwordInput}
          />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
