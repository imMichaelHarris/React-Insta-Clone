import React from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return <Comment comment={comment} key={comment.id} />;
      })}
      <input placeholder="Add a comment..." />
    </div>
  );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default CommentSection;
