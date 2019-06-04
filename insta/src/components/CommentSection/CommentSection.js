import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import Moment from 'react-moment';

class CommentSection extends React.Component {
  state = {
    commentInput: "",
    comments: this.props.comments
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
      username: "Michael",
      id: Date.now(),
      posted: <Moment fromNow></Moment>
    };
    const id = this.props.post.post.id;
    console.log(id);
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        commentInput: ""
      };
    });
    this.props.addComment(id, newComment);
  };
  render() {
    // console.log(this.props.post)
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment comment={comment} key={comment.id} />;
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
