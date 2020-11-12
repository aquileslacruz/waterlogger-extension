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
		default:
			return { ...state };
	}
};

export default handler;
