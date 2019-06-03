import React from 'react';
import PropTypes from 'prop-types';

const Img = props => {
    console.log("image props", props)
    return (
        <div className="image-container">
            <img src={props.image} alt={props.username} />
        </div>
    );
};

Img.propTypes = {
    
};

export default Img;