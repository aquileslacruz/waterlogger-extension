/* global chrome */

import axios from "axios";
import { ACTIONS, ROUTES } from "../constants/app";

const set_token = (token) => ({
	type: ACTIONS.SET_TOKEN,
	value: token,
});

const set_users = (users) => ({
	type: ACTIONS.SET_USERS,
	value: users,
});

const set_page = (page) => ({
	type: ACTIONS.SET_PAGE,
	value: page,
});

export const getUsers = (token, page = 1, limit = 10) => (dispatch) =>
	axios
		.get(ROUTES.GET_USERS, {
			headers: { Authorization: `Bearer ${token}` },
			params: { page, limit },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_users(data)));

export const getToken = (token) => (dispatch) =>
	axios
		.get(ROUTES.GET_TOKEN, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_token(data.access_token)));

export const changePage = (token, page) => (dispatch) => {
	dispatch(set_page(page));
	dispatch(getToken(token));
};

// CHROME STORAGE SECTION
export const loadUserToken = () => (dispatch) =>
	chrome.storage.local.get(["app"], (result) =>
		dispatch(set_token(result.app.token))
	);
