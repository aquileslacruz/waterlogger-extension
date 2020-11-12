import { API_URL } from "./app";

export const ACTIONS = {
	SET_NOTIFICATIONS: "HME_SET_NOTIFICATIONS",
	DEL_NOTIFICATION: "HME_DEL_NOTIFICATION",
	CLEAR: "HME_CLEAR",
};

export const ROUTES = {
	GET_NOTIFICATIONS: `${API_URL}/notifications/`,
	DEL_NOTIFICATION: (id) => `${API_URL}/notifications/${id}/`,
};
