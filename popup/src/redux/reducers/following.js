import { ACTIONS } from "../constants/following";

const initialState = {
	following: [],
	followers: [],
};

const handler = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_FOLLOWING:
			return { ...state, following: action.value };
		case ACTIONS.SET_FOLLOWERS:
			return { ...state, followers: action.value };
		case ACTIONS.LOAD_STORED_DATA:
			return { ...state, ...action.data.following };
		case ACTIONS.CLEAR:
			return initialState;
		default:
			return { ...state };
	}
};

export default handler;
