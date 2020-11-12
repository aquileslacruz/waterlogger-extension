import { useSelector } from "react-redux";
import "./Styles.scss";

const Search = ({ onQueryChange, onSearch, onClearBar }) => {
	const results = useSelector(state.search.results);
	const barResults = useSelector(state.search.barResults);
	
	return (
		<div id='search-page'>
			<div className='search-bar'>
				<Input.Search
					placeholder='Enter username'
					onChange={onQueryChange}
					onSearch={onSearch}
					onBlur={onClearBar}
				/>
				{barResults.length > 0 && (
					<div className='results'>
						{barResults.map((e) => (
							<BarResultItem {...e} />
						))}
					</div>
				)}
			</div>
			<div className='results-list'>
				{results.map((e) => (
					<ResultItem {...e} />
				))}
			</div>
		</div>
	);
};

const BarResultItem = ({ id, username }) => (
	<div className='item' key={id}>
		{username}
	</div>
);

const ResultItem = ({ id, username, image = "/profile.png" }) => (
	<div className='item'>
		<img src={image} className='image' />
		<span>{username}</span>
		<div className='right'>
			<FollowButton id={id} />
		</div>
	</div>
);

const FollowButton = ({ id }) => {
	const user = useSelector((state) => state.login.user);
	const following = _.get(user, "following", [])
		.map((e) => e.id)
		.includes(id);

	return following ? (
		<MinusCircleOutlined className='remove-icon' />
	) : (
		<PlusCircleOutlined className='add-icon' />
	);
};

export default Search;
