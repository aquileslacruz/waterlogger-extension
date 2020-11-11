import _ from 'lodash';

import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { searchUsers, searchBarUsers, clearSearchBar } from "../actions";


const SearchBar = () => {
    const dispatch = useDispatch();

    const results = useSelector(state => state.search.barResults);
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
        <div className='search-bar'>
            <Input.Search placeholder="Enter username" onChange={onQueryChange} onSearch={onSearch} onBlur={onClearBar} />
            { results.length > 0 && <SearchBarResults results={results} />}
        </div>
    )
};

const SearchBarResults = ({results}) => (
    <div className='results'>
        { results.map(e => <div className='item' key={e.id}>{e.username}</div>)}
    </div>
);

export default SearchBar;