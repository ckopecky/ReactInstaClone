import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faBookmark, faShareSquare } from '@fortawesome/free-regular-svg-icons'

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="footer-icon-row">
                <div className="footer-icon-container">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faShareSquare} />
                </div>
                <FontAwesomeIcon icon={faBookmark} />
            </div>
            <strong>{props.likes} likes</strong>
            

        </div>
    );
};

export default Footer;

Footer.propTypes = {
    
};