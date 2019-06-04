import React from "react";
import { CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <CardText><span className="comment-username">{props.comment.username} </span>{props.comment.text}      <span className="posted">{props.comment.posted}</span></CardText>

    </div>
  );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
    
}
export default Comment;
