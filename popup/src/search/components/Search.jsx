import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';

import { SearchBar, SearchResults } from '.';
import { searchUsers, searchBarUsers, clearSearchBar } from "../actions";

import '../styles.css';

const SearchContainer = () => {
    const dispatch = useDispatch();

    const results = useSelector(state => state.search.results);
    const barResults = useSelector(state => state.search.barResults);
    const token = useSelector(state => state.login.token);

    const onSearch = (str) => {
        dispatch(searchUsers(token, str));
        dispatch(clearSearchBar());
    };

    const onSearchBar = (str) => str.length > 2 && dispatch(searchBarUsers(token, str));
    const onClearBar = () => dispatch(clearSearchBar());

    const sendSearch = _.debounce(onSearchBar, 500);
    const clearSearchBarResults = _.debounce(onClearBar, 300);

    const onQueryChange = (e) => {
        sendSearch(e.target.value);
        clearSearchBarResults();
    };

    return (
        <div id='search-section' className='section'>
            <SearchBar results={barResults} onSearch={onSearch} onChange={onQueryChange} />
            <SearchResults results={results} />
        </div>
    )
};

export default SearchContainer;