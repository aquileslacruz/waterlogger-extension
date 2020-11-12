import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from ".";
import {
	searchUsers,
	searchBarUsers,
	clearSearchResults,
	clearSearchBar,
} from "../../../redux/actions/search";

const Container = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.app.token);

	const onSearch = (str) => {
		dispatch(searchUsers(token, str));
		dispatch(clearSearchBar());
	};

	const onSearchBar = (str) =>
		str.length > 2 && dispatch(searchBarUsers(token, str));
	const onClearBar = () => dispatch(clearSearchBar());

	const sendSearch = _.debounce(onSearchBar, 500);
	const clearSearchBarResults = _.debounce(onClearBar, 300);

	const onQueryChange = (e) => {
		sendSearch(e.target.value);
		clearSearchBarResults();
	};

	useEffect(() => {
		return () => dispatch(clearSearchResults());
	}, []);

	return <Search {...{ onSearch, onQueryChange, onClearBar }} />;
};

export default Container;
