/*global chrome*/

import { ACTIONS } from "../constants/home";

const initialState = {
	todaysDrinks: [],
	highScores: [],
};

const handler = (state = initialState, action) => {
    let result;

	switch (action.type) {
		case ACTIONS.SET_TODAYS_DRINKS:
            result = { ...state, todaysDrinks: action.value };
            chrome.storage.local.set({'home': result}, doNothing);
			return result;
		case ACTIONS.SET_HIGH_SCORES:
            result = { ...state, highScores: action.value };
            chrome.storage.local.set({'home': result}, doNothing);
			return result;
		case ACTIONS.LOAD_STORED_DATA:
            result = { ...state, ...action.data.home };
            chrome.storage.local.set({'home': result}, doNothing);
			return result;
		case ACTIONS.CLEAR:
            result = initialState;
            chrome.storage.local.set({'home': result}, doNothing);
			return result;
		default:
			return { ...state };
	}
};

const doNothing = () => {};

export default handler;
