/*global chrome*/

import { PAGES, ACTIONS } from "../constants/app";

const initialState = {
	user: null,
	token: null,
	page: PAGES.LOGIN,
	message: null,
};

const handler = (state = initialState, action) => {
	let result;
	switch (action.type) {
		case ACTIONS.SET_TOKEN:
			result = { ...state, token: action.value };
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		case ACTIONS.SET_USER:
			result = { ...state, user: action.value };
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		case ACTIONS.SET_PAGE:
			result = { ...state, page: action.value };
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		case ACTIONS.SET_MESSAGE:
			result = { ...state, message: action.value };
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		case ACTIONS.LOAD_STORED_DATA:
			result = { ...state, ...action.data.app };
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		case ACTIONS.CLEAR:
			result = initialState;
			chrome.storage.local.set({'app': result}, doNothing);
			return result;
		default:
			return { ...state };
	}
};

const doNothing = () => {};

export default handler;
