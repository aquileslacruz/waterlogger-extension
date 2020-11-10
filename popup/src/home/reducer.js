import { ACTIONS } from './constants';

const initialState = {
    notifications: []
}

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_NOTIFICATIONS:
            return {...state, notifications: action.value};
        default:
            return {...state};
    }
}

export default handler;