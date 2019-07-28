import actionTypes from './actions';

const initialState = {
    user: {},
    profile: {},
    isLoggedIn: false,
    post: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes:
            return {
                ...state
            }
        case actionTypes:
            return {

            }
        default:
            return state;
    }
}

export default reducer;