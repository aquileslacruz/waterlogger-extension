import _ from "lodash";
import { Input } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import "./Styles.scss";

const Search = ({
	onQueryChange,
	onSearch,
	onClearBar,
	onClickBarResult,
	onFollow,
	onUnfollow,
}) => {
	const results = useSelector((state) => state.search.results);
	const barResults = useSelector((state) => state.search.barResults);

	return (
		<div id='search-page'>
			<div className='search-bar'>
				<Input.Search
					placeholder='Enter username'
					onChange={onQueryChange}
					onSearch={onSearch}
					onBlur={() => _.delay(onClearBar, 300)}
				/>
				{barResults.length > 0 && (
					<div className='results'>
						{barResults.map((e) => (
							<BarResultItem {...e} onClick={onClickBarResult} />
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

const BarResultItem = ({ id, username, onClick }) => (
	<div className='item' key={id} onClick={() => onClick(id)}>
		{username}
	</div>
);

const ResultItem = ({
	id,
	username,
	image = "/profile.png",
	onFollow,
	onUnfollow,
}) => (
	<div className='item'>
		<img src={image} className='image' />
		<span>{username}</span>
		<div className='right'>
			<FollowButton {...{ id, onFollow, onUnfollow }} />
		</div>
	</div>
);

const FollowButton = ({ id, onFollow, onUnfollow }) => {
	const user = useSelector((state) => state.app.user);
	const following = _.get(user, "following", [])
		.map((e) => e.id)
		.includes(id);

	return following ? (
		<MinusCircleOutlined
			className='remove-icon'
			onClick={() => onUnfollow(id)}
		/>
	) : (
		<PlusCircleOutlined className='add-icon' onClick={() => onFollow(id)} />
	);
};

export default Search;
