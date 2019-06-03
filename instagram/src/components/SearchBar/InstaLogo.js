import React from 'react';
import "./SearchBar.css";

const InstaLogo = (props) => {
    return (
        <div className="logo-container">
            <div className="insta-icon">
                <img src={props.icon} alt="instagram-icon" />
            </div>
            <div className="insta-logo">
                <img src={props.logo} alt="instagram-logo" />
            </div>
        </div>
    );
};

export default InstaLogo;