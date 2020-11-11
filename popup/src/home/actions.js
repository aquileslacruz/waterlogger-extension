import axios from 'axios';

import { handleUnauthorized } from '../login/actions';
import { ACTIONS, ROUTES } from './constants';


const set_notifications = (data) => ({
    type: ACTIONS.SET_NOTIFICATIONS,
    value: data
});

const remove_notification = (id) => ({
    type: ACTIONS.DEL_NOTIFICATION,
    value: id
});

const set_search_results = (results) => ({
    type: ACTIONS.SET_SEARCH_RESULTS,
    value: results
});

const set_searchbar_results = (results) => ({
    type: ACTIONS.SET_SEARCHBAR_RESULTS,
    value: results
});

export const getNotifications = (token) => (dispatch) => (
    axios.get(ROUTES.GET_NOTIFICATIONS, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => dispatch(set_notifications(data)))
        .catch(error => dispatch(handleUnauthorized(error)))
);

export const removeNotification = (token, id) => (dispatch) => (
    axios.delete(ROUTES.DEL_NOTIFICATION(id), {headers: {'Authorization': `Bearer ${token}`}})
        .then(() => dispatch(remove_notification(id)))
        .catch(error => dispatch(handleUnauthorized(error)))
);

export const searchUsers = (token, query, skip=0, limit=10) => (dispatch) => (
    axios.get(ROUTES.SEARCH_USERS, 
        {params: {q: query, skip, limit}, headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => dispatch(set_search_results(data)))
        .catch(error => dispatch(handleUnauthorized(error)))
);

export const searchBarUsers = (token, query) => (dispatch) => (
    axios.get(ROUTES.SEARCH_USERS,
        {params: {q: query, skip: 0, limit: 3}, headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => dispatch(set_searchbar_results(data)))
        .catch(error => dispatch(handleUnauthorized(error)))
);

export const clearSearchBar = () => (dispatch) => dispatch(set_searchbar_results([]));