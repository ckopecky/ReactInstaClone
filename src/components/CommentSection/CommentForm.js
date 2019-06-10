import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'ckopecky1952',
            text: ''
        }
    }

    handleChanges = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state.text, this.state.username);
        this.setState({text: ''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} name="text" value={this.state.text}type="text" placeholder="Add a comment..."/>
                <button style={{backgroundColor: "transparent"}} id="post-button">POST</button>
            </form>
        );
    }
}

export default CommentForm;