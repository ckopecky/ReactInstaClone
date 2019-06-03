import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import "./SearchBar.css";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div style={{border: "1px solid lightgray"}} className="search-input-container">
                <label><FontAwesomeIcon icon={faSearch}/></label>
                <input placeholder="Search" style={{border: "none"}} type="text" name="input" value={this.state.input} />
            </div>
        );
    }
}

SearchInput.propTypes = {

};

export default SearchInput;