import { ACTIONS } from './constants';

// ACTIONS
const set_page = (page) => ({
    type: ACTIONS.SET_PAGE,
    value: page
});

const set_loading = (loading) => ({
    type: ACTIONS.SET_LOADING,
    value: loading
});

const set_message = (message) => ({
    type: ACTIONS.SET_MESSAGE,
    value: message
});

// PUBLIC METHODS
export const changePage = (page) => (dispatch) => (
    dispatch(set_page(page))
);

export const changeLoading = (loading) => (dispatch) => (
    dispatch(set_loading(loading))
);

export const setAppMessage = (msg) => (dispatch) => (
    dispatch(set_message(msg))
);