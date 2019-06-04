import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => {
        return <Post post={post} key={post.id} addComment={props.addComment} likePost={props.likePost} />;
      })}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
