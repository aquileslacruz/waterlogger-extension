import { Input } from 'antd';

const SearchBar = ({results, onSearch, onChange}) => (
    <div className='search-bar'>
        <Input.Search placeholder="Enter username" onChange={onChange} onSearch={onSearch} />
        { results.length > 0 && <SearchBarResults results={results} />}
    </div>
);

const SearchBarResults = ({results}) => (
    <div className='results'>
        { results.map(e => <div className='item' key={e.id}>{e.username}</div>)}
    </div>
);

export default SearchBar;