import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import CommentForm from './CommentForm';

class CommentSection extends React.Component {

    render(){
    
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div className="comment-box">
                            <p><strong>{comment.username}</strong></p>
                            <p>{comment.text}</p>
                            <p><FontAwesomeIcon icon={faHeart}/></p>
                        </div>
                    )
                })}
                <CommentForm />
            </div>
        );
    }
};

CommentSection.propTypes = {
    
};

export default CommentSection;