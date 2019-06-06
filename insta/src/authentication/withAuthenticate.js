import React from "react";

const withAuthenticate = Posts => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    };
    changeStatus = () => {
        this.setState(prevState => {
            return {
            loggedIn: !prevState.loggedIn
            }
        })
    }

    logOut = () => {
        this.setState({
            loggedIn: false
        })
    }
    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }
    render() {
       return this.state.loggedIn ? <Posts logOut={this.logOut} /> : <Login />
    }
  };

export default withAuthenticate;
