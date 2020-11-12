import { API_URL } from "./app";

export const ACTIONS = {
	SET_SEARCH_RESULTS: "SCH_SET_SEARCH_RESULTS",
	SET_SEARCHBAR_RESULTS: "SCH_SET_SEARCHBAR_RESULTS",
	CLEAR: "SCH_CLEAR",
};

export const ROUTES = {
	SEARCH_USERS: `${API_URL}/users/search`,
	GET_USER: (id) => `${API_URL}/users/${id}`,
};
