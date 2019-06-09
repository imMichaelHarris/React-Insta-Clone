import React from "react";
import styled from "styled-components";

const Input = styled.input`
  text-align: center;
  border-radius: 5px;
  border-style: none;
  border: 1px solid #ddd;
  width: 80%;
  &:focus {
    text-align: left;
    outline: none;
  }
  @media(min-width:800px){
    width: 20%;

  }
`;

class SearchBar extends React.Component {
  state = {
    searchInput: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.filterPosts(e.target.value);
  };
  render() {
    return (
      <Input
        placeholder="Search"
        onChange={this.handleChange}
        name="searchInput"
        value={this.state.searchInput}
        type="text"
      />
    );
  }
}

export default SearchBar;
