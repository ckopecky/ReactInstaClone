import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            username: 'ckopecky1952'
        }
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Add a comment..."/>
                <button>POST</button>
            </form>
        );
    }
}

CommentForm.propTypes = {

};

export default CommentForm;