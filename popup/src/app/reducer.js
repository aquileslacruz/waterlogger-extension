import { PAGES, ACTIONS } from './constants';


const initialState = {
    page: PAGES.LOGIN,
    loading: false,
};

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_PAGE:
            return {...state, page: action.value};
        case ACTIONS.SET_LOADING:
            return {...state, loading: action.value};
        default:
            return {...state};
    }
};

export default handler;