import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faCompass} from '@fortawesome/free-regular-svg-icons';

const IconContainer = () => {
    return (
        <div className="icon-container">
            <FontAwesomeIcon icon={faCompass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
};

export default IconContainer;