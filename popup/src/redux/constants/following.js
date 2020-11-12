import { API_URL } from "./app";

export const ACTIONS = {
    SET_FOLLOWING: "FLW_SET_FOLLOWING",
    SET_FOLLOWERS: "FLW_SET_FOLLOWERS",
    CLEAR: "FLW_CLEAR",
};

export const ROUTES = {
    MY_FOLLOWERS: `${API_URL}/users/follow`,
    FOLLOW = (id) => `${API_URL}/users/${id}/follow`,
    UNFOLLOW = (id) => `${API_URL}/users/${id}/unfollow`,
};
