import { ACTIONS } from "../constants/home";

const initialState = {
	todaysDrinks: [],
	highScores: [],
};

const handler = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_TODAYS_DRINKS:
			return { ...state, todaysDrinks: action.value };
		case ACTIONS.SET_HIGH_SCORES:
			return { ...state, highScores: action.value };
		case ACTIONS.LOAD_STORED_DATA:
			return { ...state, ...action.data.home };
		case ACTIONS.CLEAR:
			return initialState;
		default:
			return { ...state };
	}
};

export default handler;
