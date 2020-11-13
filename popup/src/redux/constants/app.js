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
	LOAD_STORED_DATA: "LOAD_DATA",
	CLEAR: "APP_CLEAR",
};

export const API_URL = "http://127.0.0.1:8000";

export const ROUTES = {
	LOGIN: `${API_URL}/token/`,
	REGISTER: `${API_URL}/users/`,

	ME: `${API_URL}/users/me`,
	FOLLOWING: `${API_URL}/users/follow/`,
	FOLLOWERS: `${API_URL}/users/followers/`,

	DRINK_WATER: `${API_URL}/drinks/`,
	TODAYS_DRINKS: `${API_URL}/drinks/today/`,

	FOLLOW: (id) => `${API_URL}/users/${id}/follow/`,
	UNFOLLOW: (id) => `${API_URL}/users/${id}/unfollow/`,

	GET_NOTIFICATIONS: `${API_URL}/notifications/`,
	DEL_NOTIFICATION: (id) => `${API_URL}/notifications/${id}/`,

	GET_USER: (id) => `${API_URL}/users/${id}/`,
	SEARCH_USERS: `${API_URL}/users/search/`,
};
