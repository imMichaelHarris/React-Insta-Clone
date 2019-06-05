import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { Card, CardImg } from "reactstrap";
class Post extends React.Component {
  state = {
    comments: this.props.post.comments,
    likes: this.props.post.likes,
    liked: false
  }

  likePost = () => {
    if(this.state.liked){
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1,
          liked: !prevState.liked
        };
      });
    } else {
      this.setState(prevState => {
        return {
          likes: prevState.likes + 1,
          liked: !prevState.liked
        }
      })
    }

  };
render(){
  return (
    <div>
      <Card className="post">
        <header>
          <img
            src={this.props.post.thumbnailUrl}
            alt={`${this.props.post.username}'s profile img`}
          />
          <h4>{this.props.post.username}</h4>
        </header>
        <CardImg
          src={this.props.post.imageUrl}
          alt={`${this.props.post.username}'s post`}
        />
        <div className="actions">
          <span onClick={this.likePost} className={`action ${this.state.liked ? 'filled': 'like'}`} />
          <span className="action comment-bubble" />
          <div><span className="likes">{this.state.likes} likes</span></div>
        </div>

        <CommentSection
          post={this.props}
          comments={this.state.comments}
        />
      </Card>
    </div>
  );
}
  
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};

export default Post;
