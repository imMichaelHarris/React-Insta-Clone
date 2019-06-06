import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import styled from "styled-components";


const Section = styled.div `
margin: 20px;
margin-top: 0;

`

class CommentSection extends React.Component {
  state = {
    commentInput: "",
    comments: this.props.comments,
    username: JSON.parse(localStorage.getItem("username"))
  };

  componentDidMount(){
    if(localStorage.getItem("comments")){
      this.setState({
        // comments: JSON.parse(localStorage.getItem('comments'))
      })
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.commentInput,
      username: this.state.username,
      id: Date.now(),
      posted: <Moment fromNow></Moment>
    };
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        commentInput: ""
      };
    });
    localStorage.setItem('comments', JSON.stringify(this.state.comments))
  };
  deleteComment = (id) => {
    this.setState(prevState => {
      return {
        comments: prevState.comments.filter(comment => {
          return comment.id !== id
        })
      }
    })
  }
  render() {
    return (
      <Section>
        {this.state.comments.map(comment => {
          return <Comment comment={comment} key={comment.id} deleteComment={this.deleteComment} username={this.state.username} />;
        })}
        <form onSubmit={this.addComment}>
          <input
            placeholder="Add a comment..."
            value={this.state.commentInput}
            onChange={this.handleChange}
            name="commentInput"
          />
        </form>
      </Section>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
