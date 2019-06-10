import React from 'react';
import InstaLogo from './InstaLogo';
import InstagramIcon from "../../assets/instalogo.png";
import InstagramLogo from "../../assets/instagram_logo.jpg";
import SearchInput from './SearchInput';
import IconContainer from './IconContainer';

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <InstaLogo 
                icon={InstagramIcon}
                logo={InstagramLogo}
            />
            <SearchInput filterPost={props.filterPost}/>
            <IconContainer />
        </div>
    );
};

export default SearchBar;