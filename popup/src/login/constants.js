import { API_URL } from '../app/constants';

export const ACTIONS = {
    SET_TOKEN: 'LGN_SET_TOKEN',
    SET_USER: 'LGN_SET_USER',
};

export const ROUTES = {
    LOGIN: `${API_URL}/token/`,
    ME: `${API_URL}/users/me`,
}