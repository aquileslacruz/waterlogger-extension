export const API_URL = "http://127.0.0.1:8000";

export const ACTIONS = {
	SET_TOKEN: "APP_SET_TOKEN",
	SET_USERS: "APP_SET_USERS",
	SET_PAGE: "APP_SET_PAGE",
	SET_ADMIN: "APP_SET_ADMIN",
};

export const ROUTES = {
	GET_TOKEN: `${API_URL}/token/`,
	GET_USERS: `${API_URL}/users/`,
	ME: `${API_URL}/users/me`,
};

export const PAGES = {
	USERS: "PAGE_USERS",
};
