import React, { Component } from 'react';
import dummydata from '../../dummy-data';
import PropTypes from 'prop-types';
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


PostContainer.propTypes = {

};

export default PostContainer;