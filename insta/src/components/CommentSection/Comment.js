import React from 'react'

const Comment = (props) => {
    return (
        <div>
            <h5>{props.comment.username}</h5>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment;