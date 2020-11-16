export const API_URL = "http://127.0.0.1:8000";

export const ACTIONS = {
	SET_TOKEN: "APP_SET_TOKEN",
	SET_USERS: "APP_SET_USERS",
	SET_PAGE: "APP_SET_PAGE",
};

export const ROUTES = {
	GET_TOKEN: `${API_URL}/token/`,
	GET_USERS: `${API_URL}/users/`,
};

export const PAGES = {
	USERS: "PAGE_USERS",
};
