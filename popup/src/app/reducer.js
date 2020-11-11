import { PAGES, ACTIONS } from './constants';


const initialState = {
    page: PAGES.LOGIN,
    message: null,
};

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_PAGE:
            return {...state, page: action.value};
        case ACTIONS.SET_MESSAGE:
            return {...state, message: action.value};
        default:
            return {...state};
    }
};

export default handler;