import _ from "lodash";
import { Input } from "antd";
import { UserResult } from "..";
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
					<UserResult {...e} {...{ onFollow, onUnfollow }} />
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

export default Search;
