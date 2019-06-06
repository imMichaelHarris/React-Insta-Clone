import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import Moment from 'react-moment';

class CommentSection extends React.Component {
  state = {
    commentInput: "",
    comments: this.props.comments,
    username: JSON.parse(localStorage.getItem("username"))
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.commentInput,
      username: this.state.username,
      id: Date.now(),
      posted: <Moment fromNow></Moment>
    };
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        commentInput: ""
      };
    });
  };
  deleteComment = (id) => {
    this.setState(prevState => {
      return {
        comments: prevState.comments.filter(comment => {
          return comment.id !== id
        })
      }
    })
  }
  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment comment={comment} key={comment.id} deleteComment={this.deleteComment}/>;
        })}
        <form onSubmit={this.addComment}>
          <input
            placeholder="Add a comment..."
            value={this.state.commentInput}
            onChange={this.handleChange}
            name="commentInput"
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
