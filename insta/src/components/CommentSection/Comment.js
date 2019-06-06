import React from "react";
import { CardText } from 'reactstrap';
import PropTypes from "prop-types";
import styled from "styled-components";

// const CardText = styled.div`
//   span {
//     font-size: 1.1rem;
//     font-weight: 600;
//   }

//   .comment {
//     margin: 5px 0;
//     .posted {
//       font-size: 0.8rem;
//       color: #bbb;
//     }
//   }
// `;

const Comment = props => {
  return (
    <div className="comment">
      <CardText>
        <span className="comment-username">{props.comment.username} </span>
        {props.comment.text}{" "}
        <span className="posted">{props.comment.posted}</span>
      </CardText>
      { props.comment.username === props.username ? <button onClick={() => props.deleteComment(props.comment.id)}>Delete</button> : ""}
      {/* <button onClick={() => props.deleteComment(props.comment.id)}>
        Delete
      </button> */}
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
