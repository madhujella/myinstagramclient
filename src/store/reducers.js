import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    isLoading: false,
    user: null,
    loggedProfile: null,
    myPosts: null,
    isLoggedIn: false,
    post: null,
    isFavd: false,
    isProfileEditSuccess: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_INIT:
            return {
                ...state, 
                error: null, 
                isLoading: true
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null, 
                loggedProfile: action.data,
                isLoggedIn: true
            }
        case actionTypes.AUTH_REG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: action.data, 
                isLoggedIn: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                error: null, 
                loggedProfile: null,
                isLoggedIn: false
            }
        case actionTypes.FETCH_POSTS_INIT:
            return {
                ...state,
                isLoading: true,
                error: null, 
                user: null
            }
        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null, 
                user: action.data
            }
        case actionTypes.FETCH_MY_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null, 
                myPosts: action.data
            }
        case actionTypes.FETCH_POSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.FETCH_POST_INIT:
            return {
                ...state,
                isLoading: true,
                error: null, 
                post: null
            }
        case actionTypes.FETCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null, 
                post: action.data
            }
        case actionTypes.FETCH_POST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.ADD_FAV_INIT:
            return {
                ...state,
                error: null, 
                isLoading: true
            }
        case actionTypes.ADD_FAV_SUCCESS:
            let updatePost = {...state.post, isFaved: true}
            return {
                ...state,
                isLoading: false,
                error: null, 
                post: updatePost
            }
        case actionTypes.ADD_FAV_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.REMOVE_FAV_INIT:
            return {
                ...state,
                error: null, 
                isLoading: true
            }
        case actionTypes.REMOVE_FAV_SUCCESS:
            let updateRPost = {...state.post, isFaved: false}
            return {
                ...state,
                isLoading: false,
                error: null, 
                post: updateRPost
            }
        case actionTypes.REMOVE_FAV_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.EDIT_PROFILE_INIT:
            return {
                ...state,
                error: null, 
                isLoading: true
            }
        case actionTypes.EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isProfileEditSuccess: true,
                error: null, 
                loggedProfile: action.data
            }
        case actionTypes.EDIT_PROFILE_FAILED:
            return {
                ...state,
                isLoading: false,
                isProfileEditSuccess: false,
                error: action.error
            }
        case actionTypes.REDIRECT_PATH:
            return {
                ...state,
                redirectTo: action.path
            }
        default:
            return state;
    }
}

export default reducer;