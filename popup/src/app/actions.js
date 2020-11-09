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

// PUBLIC METHODS
export const changePage = (page) => (dispatch) => (
    dispatch(set_page(page))
);

export const changeLoading = (loading) => (dispatch) => (
    dispatch(set_loading(loading))
);