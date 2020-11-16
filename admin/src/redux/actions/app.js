/* global chrome */

import _ from "lodash";
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

const set_admin = (value) => ({
	type: ACTIONS.SET_ADMIN,
	value,
});

export const getUsers = (token, page = 1, limit = 10) => (dispatch) =>
	axios
		.get(ROUTES.GET_USERS, {
			headers: { Authorization: `Bearer ${token}` },
			params: { page, limit },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_users(data)))
		.catch((error) => {
			if (error.response.status === 401) {
				dispatch(set_admin(false));
			}
		});

export const getToken = (token) => (dispatch) =>
	axios
		.get(ROUTES.GET_TOKEN, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_token(data.access_token)));

export const getUserInfo = (token) => (dispatch) =>
	axios
		.get(ROUTES.ME, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_admin(data.is_admin)));

export const changePage = (token, page) => (dispatch) => {
	dispatch(set_page(page));
	dispatch(getToken(token));
};

// CHROME STORAGE SECTION
export const loadUserToken = () => (dispatch) =>
	chrome.storage.local.get(["app"], (result) => {
		const token = _.get(result, "app.token", null);
		dispatch(set_token(token));
		dispatch(getUserInfo(token));
	});
