import React from "react";
import { CardText } from 'reactstrap';

const Comment = props => {
  return (
    <div className="comment">
      <CardText><span className="comment-username">{props.comment.username} </span>{props.comment.text}</CardText>
    </div>
  );
};

export default Comment;
