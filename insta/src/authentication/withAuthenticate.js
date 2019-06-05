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
       return this.state.loggedIn ? <Posts /> : <Login />
    }
  };

export default withAuthenticate;
