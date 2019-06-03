import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const Post = props => {
  return (
    <div>
      <h2>{props.post.username}</h2>
      <img src={props.post.imageUrl} alt={`${props.post.username}'s post`} />
      <CommentSection comments={props.post.comments} />
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
