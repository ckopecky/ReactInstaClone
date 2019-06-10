import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faBookmark, faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import "./PostContainer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: null,
            likedOnce: false,
            likeIcon: faHeart
        }
    }



    componentDidMount() {
        this.setState({likes: this.props.likes})
    }

    addLike = () => {
        if(!this.state.likedOnce) {
            let numLikes = Number(this.state.likes);
            numLikes += 1;
            this.setState({likes: numLikes, likedOnce: true, likeIcon: faSolidHeart});
        } else {
            let numLikes = Number(this.state.likes);
            numLikes -= 1;
            this.setState({likes: numLikes, likedOnce: false, likeIcon: faHeart});
        }
        
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-icon-row">
                    <div className="footer-icon-container">
                        <div onClick={this.addLike}><FontAwesomeIcon icon={this.state.likeIcon} style={ this.state.likeIcon === faSolidHeart ? {color: 'red'} : {color: 'black'}}/></div>
                        <div><FontAwesomeIcon icon={faComment} /></div>
                        <div><FontAwesomeIcon icon={faShareSquare} /></div>
                    </div>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <strong>{this.state.likes} likes</strong>
                
    
            </div>
        );
    }
    
};

export default Footer;
