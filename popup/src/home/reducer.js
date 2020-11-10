import { ACTIONS } from './constants';

const initialState = {
    notifications: []
};

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_NOTIFICATIONS:
            return {...state, notifications: action.value};
        case ACTIONS.ADD_NOTIFICATIONS:
            return {...state, notifications: add_notifications(state.notifications, action.value)};
        default:
            return {...state};
    }
}

const add_notifications = (original, fresh) => {
    const original_ids = original.map(elem => elem.id);
    return [...fresh.filter(elem => !original_ids.includes(elem.id)), ...original]
};

export default handler;