import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    console.log(props.post)
    return (
        <div>
            <h2>{props.post.username}</h2>
            <img src={props.post.imageUrl} alt={`${props.post.username}'s post`}/>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired
    })
}

export default PostContainer;