import axios from 'axios';

import { ACTIONS, ROUTES } from './constants';


const set_notifications = (data) => ({
    type: ACTIONS.SET_NOTIFICATIONS,
    value: data
});

const add_notifications = (data) => ({
    type: ACTIONS.ADD_NOTIFICATIONS,
    value: data
});

export const getNotifications = (token) => (dispatch) => (
    axios.get(ROUTES.GET_NOTIFICATIONS, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .then(data => {
            if (data.length > 0) {
                dispatch(add_notifications(data));
            }
        })
);

export const clearNotifications = (token, notifications) => (dispatch) => {
    dispatch(set_notifications([]));
    axios.post(ROUTES.CLEAR_NOTIFICATIONS, 
        {id_list: notifications.map(n => n.id)},
        {headers: {'Authorization': `Bearer ${token}`}}
    );

    return;
};