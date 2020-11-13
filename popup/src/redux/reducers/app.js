import { PAGES, ACTIONS } from "../constants/app";

const initialState = {
	user: null,
	token: null,
	page: PAGES.LOGIN,
	message: null,
};

const handler = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_TOKEN:
			return { ...state, token: action.value };
		case ACTIONS.SET_USER:
			return { ...state, user: action.value };
		case ACTIONS.SET_PAGE:
			return { ...state, page: action.value };
		case ACTIONS.SET_MESSAGE:
			return { ...state, message: action.value };
		case ACTIONS.CLEAR:
			return initialState;
		default:
			return { ...state };
	}
};

export default handler;
