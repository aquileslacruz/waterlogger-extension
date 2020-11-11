import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';
import _ from 'lodash';

import { searchUsers, searchBarUsers, clearSearchBar } from "../actions";

const { Search } = Input;

const SearchContainer = () => {
    const dispatch = useDispatch();

    const results = useSelector(state => state.home.searchResults);
    const barResults = useSelector(state => state.home.searchBarResults);
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
        <div className='section search-section'>
            <SearchBar results={barResults} onSearch={onSearch} onChange={onQueryChange} />
            <ResultsContainer results={results} />
        </div>
    )
};

const SearchBar = ({results, onSearch, onChange}) => (
    <div className='search-bar'>
        <Search placeholder="Enter username" onChange={onChange} onSearch={onSearch} />
        { results.length > 0 && <SearchBarResults results={results} />}
    </div>
);

const SearchBarResults = ({results}) => (
    <div className='results'>
        { results.map(e => <div className='item' key={e.id}>{e.username}</div>)}
    </div>
);

const ResultsContainer = ({results}) => (
    <div className='results-list'>
        { results.map(e => <ResultItem {...e} />) }
    </div>
);

const ResultItem = ({id, username}) => (
    <div>{`${id} ${username}`}</div>
);

export default SearchContainer;