import { API_URL } from '../app/constants';

export const SECTIONS = {
    MAIN: 'SECTION_MAIN',
    SEARCH: 'SECTION_SEARCH',
    FRIENDS: 'SECTION_FRIENDS',
    NOTIFICATIONS: 'SECTION_NOTIFICATIONS',
};

export const ACTIONS = {
    SET_NOTIFICATIONS: 'HME_SET_NOTIFICATIONS',
    ADD_NOTIFICATIONS: 'HME_ADD_NOTIFICATIONS',
};

export const ROUTES = {
    GET_NOTIFICATIONS: `${API_URL}/drinks/notifications`,
    CLEAR_NOTIFICATIONS: `${API_URL}/drinks/notifications/remove`
};