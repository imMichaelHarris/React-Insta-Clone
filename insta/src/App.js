import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./dummy-data.js"; //? thought we needed {} to import guess it has something to do with export default at the bottom
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  state = {
    data: dummyData
  };
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
