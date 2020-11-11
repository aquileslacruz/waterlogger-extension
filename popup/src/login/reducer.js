import { ACTIONS } from './constants';

const initialState = {
    token: null,
    user: null,
};

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_TOKEN:
            return {...state, token: action.value};
        case ACTIONS.SET_USER:
            return {...state, user: action.value};
        default:
            return {...state};
    }
}

export default handler;