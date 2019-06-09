import React from "react";
import { CardText } from 'reactstrap';
import PropTypes from "prop-types";
import styled from 'styled-components';

const DeleteButton = styled.button`
  font-size: .8rem;
  border-radius: 5px;
  border-style: none;
  margin: 0 10px; 
  background: tomato;
  color: #fff
`



const Comment = props => {
  return (
    <div className="comment">
      <CardText>
        <span className="comment-username">{props.comment.username} </span>
        {props.comment.text}{" "}
        <span className="posted">{props.comment.posted}</span>
        { props.comment.username === props.username ? <DeleteButton onClick={() => props.deleteComment(props.comment.id)}>x</DeleteButton> : ""}

      </CardText>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};
export default Comment;
