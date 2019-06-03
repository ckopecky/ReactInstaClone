import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummydata from "./dummy-data";
import CommentSection from './components/CommentSection/CommentSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: []
    }
  }

  componentDidMount() {
    this.setState({dummydata})
  }

  addComment = (comment, user) => {

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SearchBar />
{this.state.dummydata.map(post => {
          return (
            <div key={post.username + post.likes} className="instagram-container">
              <div className="post-container">
                <PostContainer 
                  username={post.username}
                  image={post.imageUrl}
                  profile={post.thumbnailUrl}
                  numLikes={post.likes}
                  timestamp={post.timestamp}
                />
                <CommentSection   comments={post.comments}
                />
              </div>
            </div>
          )
        })}
        
      </div>
    );
  }
}

export default App;