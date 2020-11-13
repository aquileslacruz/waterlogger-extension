import { ACTIONS } from "../constants/notifications";

const initialState = {
	notifications: [],
};

const handler = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_NOTIFICATIONS:
			return { ...state, notifications: action.value };
		case ACTIONS.DEL_NOTIFICATION:
			return {
				...state,
				notifications: state.notifications.filter(
					(e) => e.id !== action.value
				),
			};
		case ACTIONS.LOAD_STORED_DATA:
			return { ...state, ...action.data.notifications };
		case ACTIONS.CLEAR:
			return initialState;
		default:
			return { ...state };
	}
};

export default handler;
