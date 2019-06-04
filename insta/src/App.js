import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./dummy-data.js"; //? thought we needed {} to import guess it has something to do with export default at the bottom
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  state = {
    data: []
  };

  // addComment = (comment) => {
  //   const newComment = {
  //     text: comment,
  //     username: "",
  //     id: Date.now()
  //   }
  //   this.setState(prevState => {
  //     return {
  //       data: prevState.data.map(post => {

  //       })
  //     }
  //   })
  // }
  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.data} addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
