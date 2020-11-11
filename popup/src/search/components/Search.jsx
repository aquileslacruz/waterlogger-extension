import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchBar, SearchResults } from '.';
import { clearSearchResults } from "../actions";

import '../styles.css';

const SearchContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(clearSearchResults())
    }, []);

    return (
        <div id='search-section' className='section'>
            <SearchBar  />
            <SearchResults />
        </div>
    )
};

export default SearchContainer;