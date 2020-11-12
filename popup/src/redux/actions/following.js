import { ACTIONS, ROUTES } from "../constants/following";
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

export const getFollowers = (token) => (dispatch) =>
	axios
		.get(ROUTES.MY_FOLLOWERS, {
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
		.then(() => dispatch(getFollowers(token)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const unfollowUser = (token, id) => (dispatch) =>
	axios
		.post(
			ROUTES.UNFOLLOW,
			{},
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then(() => dispatch(getFollowers(token)))
		.catch((error) => dispatch(handleUnauthorized(error)));

export const clearFollowing = () => (dispatch) => dispatch(clear());
