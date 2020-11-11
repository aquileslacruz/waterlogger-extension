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