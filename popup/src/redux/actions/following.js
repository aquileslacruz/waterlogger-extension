import axios from "axios";
import { ACTIONS } from "../constants/following";
import { ROUTES } from "../constants/app";
import { handleUnauthorized } from "./app";

const set_following = (users) => ({
	type: ACTIONS.SET_FOLLOWING,
	value: users,
});

const set_followers = (users) => ({
	type: ACTIONS.SET_FOLLOWERS,
	value: users,
});

const clear = () => ({
	type: ACTIONS.CLEAR,
});

export const getFollowing = (token) => (dispatch) =>
	axios
		.get(ROUTES.FOLLOWING, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_following(data)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const getFollowers = (token) => (dispatch) =>
	axios
		.get(ROUTES.FOLLOWERS, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_followers(data)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const followUser = (token, id) => (dispatch) =>
	axios
		.post(
			ROUTES.FOLLOW(id),
			{},
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then(() => dispatch(getFollowing(token)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const unfollowUser = (token, id) => (dispatch) =>
	axios
		.post(
			ROUTES.UNFOLLOW(id),
			{},
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then(() => dispatch(getFollowing(token)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const clearFollowing = () => (dispatch) => dispatch(clear());
