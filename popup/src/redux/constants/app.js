export const PAGES = {
    LOGIN: 'PAGE_LOGIN',
    REGISTER: 'PAGE_REGISTER',
    HOME: 'PAGE_HOME',
    SEARCH: 'PAGE_SEARCH',
    NOTIFICATIONS: 'PAGE_NOTIFICATIONS',
};

export const ACTIONS = {
    SET_TOKEN: 'APP_SET_TOKEN',
    SET_USER: 'APP_SET_USER',
    SET_PAGE: 'APP_SET_PAGE',
    SET_MESSAGE: 'APP_SET_MESSAGE',
};

export const API_URL = 'http://127.0.0.1:8000';

export const ROUTES = {
    CREATE: `${API_URL}/users/`,
    LOGIN: `${API_URL}/token/`,
    ME: `${API_URL}/users/me`,
};