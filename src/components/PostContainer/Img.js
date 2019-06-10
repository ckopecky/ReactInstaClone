import React from 'react';
import './PostContainer.css'

const Img = props => {
    // console.log("image props", props)
    return (
        <div className="image-container">
            <img src={props.image} alt={props.username} />
        </div>
    );
};


export default Img;