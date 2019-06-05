import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dummyData from "./dummy-data.js"; //? thought we needed {} to import guess it has something to do with export default at the bottom
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  state = {
    data: [],
    filtered: []
  };

  //         Initialization             ///
  componentDidMount() {
    this.setState({
      data: dummyData,
      filtered: dummyData
    });
  }

  //          ADD A COMMENT TO A POST            //
  addComment = (id, input) => {
    this.setState(prevState => {
      return {
        data: prevState.data.map(post => {
          if (post.id === id) {
            return {
              ...post,
              comments: [...post.comments, input]
            };
          } else {
            return post;
          }
        })
      };
    });
  };
  //             LIKE A POST                     //
  // likePost = id => {
  //   console.log(id);
  //   this.setState(prevState => {
  //     return {
  //       data: prevState.data.map(post => {
  //         if (post.id === id) {
  //           return {
  //             ...post,
  //             likes: (post.likes += 1),
  //             liked: true
  //           };
  //         } else {
  //           return post;
  //         }
  //       })
  //     };
  //   });
  // };
  //           SEARCH POST BASED ON USER INPUT                   //
  filterPosts = input => {
    this.setState(prevState => {
      return {
        filtered: prevState.data.filter(post => post.username.toLowerCase().includes(input.toLowerCase()))
      }
    })
  };

  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="App">
        <header>
          <div className="app-header">
            <div className="logo">
              <span className="header insta-logo" />
              <span className="header instagram" />
            </div>
            <SearchBar filterPosts={this.filterPosts} />
            <div className="account" />
          </div>
        </header>
        <PostContainer
          posts={this.state.filtered}
          // addComment={this.addComment}
          // likePost={this.likePost}
        />
      </div>
    );
  }
}

export default App;
