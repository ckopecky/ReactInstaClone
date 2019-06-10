import React from 'react';
import PostHeader from './PostHeader';
import Img from './Img';
import Footer from './Footer';

const PostContainer = props => { 
    return (
        <div>
            <PostHeader 
                profilePic={props.profile}
                username={props.username} 
                timestamp={props.timestamp}
            />
            <Img
                image={props.image} 
            />
            <Footer 
                likes={props.numLikes}
            />
        </div>
    );
}

export default PostContainer;