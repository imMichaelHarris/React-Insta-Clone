import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  state = {
    commentInput: ""
  };

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  addComment = e => {
      e.preventDefault();
      this.props.addComment(this.state.commentInput)
  }
  render() {
    return (
      <div className="comment-section">
        {this.props.comments.map(comment => {
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
