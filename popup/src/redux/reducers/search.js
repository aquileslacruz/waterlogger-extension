/*global chrome*/

import { ACTIONS } from "../constants/search";

const initialState = {
	barResults: [],
	results: [],
};

const handler = (state = initialState, action) => {
	let result;

	switch (action.type) {
		case ACTIONS.SET_SEARCH_RESULTS:
			result = { ...state, results: action.value };
			chrome.storage && chrome.storage.local.set({ search: result }, doNothing);
			return result;
		case ACTIONS.SET_SEARCHBAR_RESULTS:
			result = { ...state, barResults: action.value };
			chrome.storage && chrome.storage.local.set({ search: result }, doNothing);
			return result;
		case ACTIONS.LOAD_STORED_DATA:
			result = { ...state, ...action.data.search };
			chrome.storage && chrome.storage.local.set({ search: result }, doNothing);
			return result;
		case ACTIONS.CLEAR:
			result = initialState;
			chrome.storage && chrome.storage.local.set({ search: result }, doNothing);
			return result;
		default:
			return { ...state };
	}
};

const doNothing = () => {};

export default handler;
