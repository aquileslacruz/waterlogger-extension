import axios from "axios";

import { ACTIONS, ROUTES } from "../constants/search";
import { handleUnauthorized } from "./app";

const set_search_results = (results) => ({
	type: ACTIONS.SET_SEARCH_RESULTS,
	value: results,
});

const set_searchbar_results = (results) => ({
	type: ACTIONS.SET_SEARCHBAR_RESULTS,
	value: results,
});

export const searchUsers = (token, query, skip = 0, limit = 10) => (dispatch) =>
	axios
		.get(ROUTES.SEARCH_USERS, {
			params: { q: query, skip, limit },
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_search_results(data)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const searchBarUsers = (token, query) => (dispatch) =>
	axios
		.get(ROUTES.SEARCH_USERS, {
			params: { q: query, skip: 0, limit: 3 },
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_searchbar_results(data)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const selectedSearchResult = (token, id) => (dispatch) =>
	axios
		.get(ROUTES.GET_USER(id), {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((user) => dispatch(set_search_results([user])))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const clearSearchResults = () => (dispatch) =>
	dispatch(set_search_results([]));

export const clearSearchBar = () => (dispatch) =>
	dispatch(set_searchbar_results([]));
