/*global chrome*/

import axios from "axios";
import _ from "lodash";
import { ACTIONS, ROUTES, PAGES, PANEL_URL } from "../constants/app";
import { getFollowing, getFollowers, clearFollowing } from "./following";
import { clearSearch } from "./search";
import { clearNotifications, getNotifications } from "./notifications";
import { getTodaysDrinks } from "./home";

// ACTIONS
const set_token = (token) => ({
	type: ACTIONS.SET_TOKEN,
	value: token,
});

const set_user = (user) => ({
	type: ACTIONS.SET_USER,
	value: user,
});

const set_page = (page) => ({
	type: ACTIONS.SET_PAGE,
	value: page,
});

const set_message = (message) => ({
	type: ACTIONS.SET_MESSAGE,
	value: message,
});

const load_stored_data = (data) => ({
	type: ACTIONS.LOAD_STORED_DATA,
	data,
});

const clear = () => ({
	type: ACTIONS.CLEAR,
});

// PUBLIC METHODS
export const login = (username, password) => (dispatch) =>
	axios
		.post(ROUTES.LOGIN, {}, { auth: { username, password } })
		.then((response) => response.data)
		.then((data) => {
			dispatch(set_token(data.access_token));
			return dispatch(getUser(data.access_token));
		})
		.catch(() => {
			dispatch(
				setAppMessage({
					type: "error",
					message: "Invalid username/password",
				})
			)
			setTimeout(() => dispatch(setAppMessage(null)), 5*1000);
		});

export const logout = () => (dispatch) => {
	dispatch(clearApp());
	dispatch(clearSearch());
	dispatch(clearFollowing());
	dispatch(clearNotifications());
};

export const reload = (token) => (dispatch) =>
	axios
		.get(ROUTES.LOGIN, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response.data)
		.then((data) => dispatch(set_token(data.access_token)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const register = (username, password, first_name, last_name) => (
	dispatch
) =>
	axios
		.post(ROUTES.REGISTER, { username, password, first_name, last_name })
		.then((response) => response.data)
		.then(() => {
			dispatch(login(username, password));
		});

export const getUser = (token) => (dispatch) =>
	axios
		.get(ROUTES.ME, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response.data)
		.then((data) => {
			dispatch(set_user(data));
			dispatch(getFollowing(token));
			dispatch(getFollowers(token));
			dispatch(getTodaysDrinks(token));
			dispatch(getNotifications(token));
			dispatch(changePage(PAGES.HOME));
		})
		.catch((error) => dispatch(handleUnauthorized(error)));

export const getUserInfo = (token) => (dispatch) => {
	dispatch(getFollowers(token));
	dispatch(getFollowing(token));
	dispatch(getNotifications(token));
	dispatch(getTodaysDrinks(token));
};

export const handleUnauthorized = (error) => (dispatch) => {
	if (error.response) {
		if (error.response.status === 401) {
			dispatch(
				setAppMessage({ message: "You were logged out", type: "error" })
			);
			dispatch(logout());
		}
	}
};

export const clearApp = () => (dispatch) => dispatch(clear());

export const changePage = (page) => (dispatch) => dispatch(set_page(page));

export const setAppMessage = (msg) => (dispatch) => dispatch(set_message(msg));

// CHROME STORAGE SECTION
export const loadStorageReducers = () => (dispatch) =>
	chrome.storage && chrome.storage.local.get(
		["app", "home", "search", "following", "notifications"],
		(result) => {
			dispatch(load_stored_data(result));
			const token = _.get(result, "app.token", null);
			return token && dispatch(reload(token));
		}
	);

// CHROME ADMIN SECTION
export const openAdminPanel = () => chrome.storage && window.open(PANEL_URL, "_blank");
