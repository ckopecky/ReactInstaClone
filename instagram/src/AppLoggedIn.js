import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummydata from "./dummy-data";


class AppLoggedIn extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            dummydata: []
        }
    }

    componentDidMount() {
        this.setState({dummydata});
    }

    filterPost = (searchTerm) => {
        const filtered = this.state.dummydata.filter(item => {
            return item.username === searchTerm;
        })
        this.setState({dummydata: filtered});
    }

    render() {
        console.log(this.props);
        return (
            <>
                <SearchBar 
                    toggle={this.props.toggle}
                    filterPost={this.filterPost}/>
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
                                    <CommentSection   
                                    comments={post.comments}
                                    />
                                </div>
                            </div>
                        )
                    })}
        
                </>
            );
        }
    }

export default AppLoggedIn;