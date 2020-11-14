/*global chrome*/

import { ACTIONS } from "../constants/notifications";

const initialState = {
	notifications: [],
};

const handler = (state = initialState, action) => {
	let result;

	switch (action.type) {
		case ACTIONS.SET_NOTIFICATIONS:
			result = { ...state, notifications: action.value };
			chrome.storage.local.set({'notifications': result}, doNothing);
			return result;
		case ACTIONS.DEL_NOTIFICATION:
			result = {
				...state,
				notifications: state.notifications.filter(
					(e) => e.id !== action.value
				),
			};
			chrome.storage.local.set({'notifications': result}, doNothing);
			return result;
		case ACTIONS.LOAD_STORED_DATA:
			result = { ...state, ...action.data.notifications };
			chrome.storage.local.set({'notifications': result}, doNothing);
			return result;
		case ACTIONS.CLEAR:
			result = initialState;
			chrome.storage.local.set({'notifications': result}, doNothing);
			return result;
		default:
			return { ...state };
	}
};

const doNothing = () => {};

export default handler;
