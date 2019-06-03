import React from 'react';
import InstaLogo from './InstaLogo';
import InstagramIcon from "../../assets/instalogo.png";
import InstagramLogo from "../../assets/instagram_logo.jpg";
import SearchInput from './SearchInput';
import IconContainer from './IconContainer';

const SearchBar = () => {
    return (
        <div className="search-container">
            <InstaLogo 
                icon={InstagramIcon}
                logo={InstagramLogo}
            />
            <SearchInput />
            <IconContainer />
        </div>
    );
};

export default SearchBar;