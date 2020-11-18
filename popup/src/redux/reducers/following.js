/*global chrome*/

import { ACTIONS } from "../constants/following";

const initialState = {
	following: [],
	followers: [],
};

const handler = (state = initialState, action) => {
	let result;

	switch (action.type) {
		case ACTIONS.SET_FOLLOWING:
			result = { ...state, following: action.value };
			chrome.storage && chrome.storage.local.set({ following: result }, doNothing);
			return result;
		case ACTIONS.SET_FOLLOWERS:
			result = { ...state, followers: action.value };
			chrome.storage && chrome.storage.local.set({ following: result }, doNothing);
			return result;
		case ACTIONS.LOAD_STORED_DATA:
			result = { ...state, ...action.data.following };
			chrome.storage && chrome.storage.local.set({ following: result }, doNothing);
			return result;
		case ACTIONS.CLEAR:
			result = initialState;
			chrome.storage && chrome.storage.local.set({ following: result }, doNothing);
			return result;
		default:
			return { ...state };
	}
};

const doNothing = () => {};

export default handler;
