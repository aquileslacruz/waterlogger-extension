import { ACTIONS, PAGES } from "../constants/app";

const initialState = {
    token: null,
    page: PAGES.USERS,
    users: {
        page: 1,
        per_page: 10,
        page_count: 1,
        total_count: 0,
        results: []
    },
};

const handler = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.SET_USERS:
            return { ...state, users: action.value };
        case ACTIONS.SET_TOKEN:
            return { ...state, token: action.value };
        case ACTIONS.SET_PAGE:
            return { ...state, page: action.value };
        default:
            return { ...state };
    }
}

export default handler;