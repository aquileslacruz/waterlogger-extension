export const PAGES = {
	LOGIN: "PAGE_LOGIN",
	REGISTER: "PAGE_REGISTER",
	HOME: "PAGE_HOME",
	SEARCH: "PAGE_SEARCH",
	FOLLOWING: "PAGE_FOLLOWING",
	NOTIFICATIONS: "PAGE_NOTIFICATIONS",
};

export const ACTIONS = {
	SET_TOKEN: "APP_SET_TOKEN",
	SET_USER: "APP_SET_USER",
	SET_PAGE: "APP_SET_PAGE",
	SET_MESSAGE: "APP_SET_MESSAGE",
	CLEAR: "APP_CLEAR",
};

export const API_URL = "http://127.0.0.1:8000";

export const ROUTES = {
	CREATE: `${API_URL}/users/`,
	LOGIN: `${API_URL}/token/`,
	ME: `${API_URL}/users/me`,
	DRINK_WATER: `${API_URL}/drinks/`,
	FOLLOWING: `${API_URL}/users/follow`,
	FOLLOWERS: `${API_URL}/users/followers`,
	FOLLOW: (id) => `${API_URL}/users/${id}/follow`,
	UNFOLLOW: (id) => `${API_URL}/users/${id}/unfollow`,
	GET_NOTIFICATIONS: `${API_URL}/notifications/`,
	DEL_NOTIFICATION: (id) => `${API_URL}/notifications/${id}/`,
	SEARCH_USERS: `${API_URL}/users/search`,
	GET_USER: (id) => `${API_URL}/users/${id}`,
};
