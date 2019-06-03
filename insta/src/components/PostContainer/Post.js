import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { Card, CardImg } from "reactstrap";
const Post = props => {
  return (
    <div className="post">
      <Card>
        <header>
          <img
            src={props.post.thumbnailUrl}
            alt={`${props.post.username}'s profile img`}
          />
          <h4>{props.post.username}</h4>
        </header>
        <CardImg
          src={props.post.imageUrl}
          alt={`${props.post.username}'s post`}
        />
        <CommentSection
          comments={props.post.comments}
          addComment={props.addComment}
        />
      </Card>
    </div>
  );
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
