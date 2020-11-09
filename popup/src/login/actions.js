import axios from 'axios';

import { ACTIONS, ROUTES } from './constants';
import { PAGES } from '../app/constants';
import { changePage } from '../app/actions';

// ACTIONS
const set_token = (token) => ({
    type: ACTIONS.SET_TOKEN,
    value: token
});

const set_user = (user) => ({
    type: ACTIONS.SET_USER,
    value: user
});

// PUBLIC METHODS
export const login = (username, password) => (dispatch) => (
    axios.post(ROUTES.LOGIN, {username, password})
        .then(response => response.data)
        .then(data => {
            dispatch(set_token(data.access_token));
            dispatch(getUser(data.access_token));
        })
);

export const reload = (token) => (dispatch) => (
    axios.get(ROUTES.LOGIN, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => {
            dispatch(set_token(data.access_token));
        })
);

export const register = (username, password, first_name, last_name) => (dispatch) => (
    axios.post(ROUTES.CREATE, {username, password, first_name, last_name})
        .then(response => response.data)
        .then(() => {
            dispatch(login(username, password));
        })
);

export const getUser = (token) => (dispatch) => (
    axios.get(ROUTES.ME, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => {
            dispatch(set_user(data));
            dispatch(changePage(PAGES.HOME));
        })
);