import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withAuthenticate from './authentication/withAuthenticate';
import PostsPage from "./components/PostContainer/PostsPage";
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);


class App extends React.Component {
 

  //         Initialization             ///
 

  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="App">
      <ComponentFromWithAuthenticate />

      </div>
    );
  }
}

export default App;
