import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";
import {Button} from 'reactstrap'



class PostsPage extends React.Component {
  state = {
    data: dummyData,
    filtered: dummyData,
    username: ""
  };

  componentDidMount() {
    this.setState({
      data: dummyData,
      filtered: dummyData
    });
  }


  logOut = () => {
    // window.location.reload()
    localStorage.removeItem("username");
    this.props.logOut();
  }

  //           SEARCH POST BASED ON USER INPUT                   //
  filterPosts = input => {
    this.setState(prevState => {
      return {
        filtered: prevState.data.filter(post =>
          post.username.toLowerCase().includes(input.toLowerCase())
        )
      };
    });
  };

  render() {
    return (
      <div>
        <header>
          <div className="app-header">
            <div className="logo">
              <span className="header insta-logo" />
              <span className="header instagram" />
            </div>
            <SearchBar filterPosts={this.filterPosts} />
            <div className="account" >
              <span className="header compass"></span>
              <span className="header heart"></span>
              <span className="header profile"></span>
              <Button className="logout" onClick={this.logOut}>Log Out</Button>

            </div>
          </div>
        </header>
        <PostContainer posts={this.state.filtered} />
      </div>
    );
  }
}

export default PostsPage;
