import React from 'react';
import PropTypes from 'prop-types';
import "./PostContainer.css";

const PostHeader = props => {
    console.log(props, "header props")
    return (
        <div className="profile-pic-username">
            <img className="profile-pic" src={props.profilePic} alt={props.username} />
            <strong>{props.username}</strong>
        </div>
    );
};

PostHeader.propTypes = {
    
};

export default PostHeader;