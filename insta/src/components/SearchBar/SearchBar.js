import React from "react";

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
      <input
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
