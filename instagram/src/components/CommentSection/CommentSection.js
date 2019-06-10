import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import CommentForm from './CommentForm';
import "./comments.css";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            text: ''
        }
    }

    componentDidMount() {
        this.setState({comments: this.props.comments});
    }

    addComment = (comment, user) => {
        let newComment = { username: user, text: comment}
        this.setState({comments: [...this.state.comments, newComment ]});

    }

    render(){
    
        return (
            <div>
                {this.state.comments.map(comment => {
                    return (
                        <div key={comment.text} className="comment-box">
                            <p><strong>{comment.username}</strong></p>
                            <p>{comment.text}</p>
                            <p><FontAwesomeIcon icon={faHeart}/></p>
                        </div>
                    )
                })}
                <CommentForm 
                    addComment={this.addComment}
                />
            </div>
        );
    }
};

export default CommentSection;