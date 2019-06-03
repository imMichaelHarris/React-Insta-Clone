import React from 'react';
import './index.css';
import  dummyData  from './dummy-data.js'; //? thought we needed {} to import guess it has something to do with export default at the bottom
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  state = {
    data: dummyData
  }
  render(){
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer post={post} key={post.id} />
        })}
      </div>
    );
  }

}

export default App;
