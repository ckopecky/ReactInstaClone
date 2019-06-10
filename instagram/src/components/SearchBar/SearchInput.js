import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBar.css";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChanges = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterPost(this.state.input);
        this.setState({input: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{border: "1px solid lightgray"}} className="search-input-container">
                <label><FontAwesomeIcon icon={faSearch}/></label>
                <input placeholder="Search" style={{border: "none"}} type="text" name="input" value={this.state.input} onChange={this.handleChanges}/>
            </form>
        );
    }
}

export default SearchInput;