import { ACTIONS } from "../constants/search";

const initialState = {
	barResults: [],
	results: [],
};

const handler = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_SEARCH_RESULTS:
			return { ...state, results: action.value };
		case ACTIONS.SET_SEARCHBAR_RESULTS:
			return { ...state, barResults: action.value };
		case ACTIONS.LOAD_STORED_DATA:
			return { ...state, ...action.data.search };
		case ACTIONS.CLEAR:
			return initialState;
		default:
			return { ...state };
	}
};

export default handler;
