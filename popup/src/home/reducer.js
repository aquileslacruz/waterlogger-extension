import { ACTIONS } from './constants';

const initialState = {
    notifications: [],
    searchResults: [],
    searchBarResults: [],
};

const handler = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_NOTIFICATIONS:
            return {...state, notifications: action.value};
        case ACTIONS.DEL_NOTIFICATION:
            return {...state, notifications: state.notifications.filter(e => e.id !== action.value)}
        case ACTIONS.SET_SEARCH_RESULTS:
            return {...state, searchResults: action.value};
        case ACTIONS.SET_SEARCHBAR_RESULTS:
            return {...state, searchBarResults: action.value};
        default:
            return {...state};
    }
}

export default handler;