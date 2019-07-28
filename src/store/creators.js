import * as actionTypes from './actionTypes';
import * as API from '../API';

export const logout = () => {
    localStorage.clear();
    return { type: actionTypes.AUTH_LOGOUT }
}

export const authInit = () => ({ type: actionTypes.AUTH_INIT })

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(authInit())
        let data = { username, password }
        fetch(API.login, data).then((data) => {
            console.log(data)
            localStorage.setItem('login', data);
            dispatch(authSuccess(data));
        }).catch((error) => {
            dispatch(authFail(error));
        })
    }
}


export const getUserInit = () => ({ type: actionTypes.FETCH_POSTS_INIT })

export const getUserSuccess = (userdata) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        userdata
    }
}

export const getUserFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        error
    }
}

export const getUser = (userid) => {
    return dispatch => {
        dispatch(getUserInit())
        fetch(API.user + '/' + encodeURIComponent(userid)).then((data) => {
            console.log(data)
            dispatch(getUserSuccess(data));
        }).catch((error) => {
            dispatch(getUserFailed(error));
        })
    }
}

export const getLoggedUser = (userid, token) => {
    return dispatch => {
        dispatch(getUserInit())
        fetch(API.mainpage, { userid, token }).then((data) => {
            console.log(data)
            dispatch(getUserSuccess(data));
        }).catch((error) => {
            dispatch(getUserFailed(error));
        })
    }
}



export const getPostInit = () => ({ type: actionTypes.FETCH_POST_INIT })

export const getPostSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        post
    }
}

export const getPostFailed = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAILED,
        error
    }
}

export const getPost = (postid) => {
    return dispatch => {
        dispatch(getPostInit())
        fetch(API.post + '/' + encodeURIComponent(postid)).then((data) => {
            console.log(data)
            dispatch(getUserSuccess(data));
        }).catch((error) => {
            dispatch(getUserFailed(error));
        })
    }
}



export const addFavInit = () => ({ type: actionTypes.ADD_FAV_INIT })

export const addFavSuccess = (post) => {
    return {
        type: actionTypes.ADD_FAV_SUCCESS,
        post
    }
}

export const addFavFailed = (error) => {
    return {
        type: actionTypes.ADD_FAV_FAILED,
        error
    }
}

export const addFav = (token, userid, shouldfav, photoid) => {
    return dispatch => {
        dispatch(addFavInit())
        const data = { token, userid, shouldfav, photoid }
        fetch(API.favorite, data).then((data) => {
            console.log(data)
            dispatch(addFavSuccess(data));
        }).catch((error) => {
            dispatch(addFavFailed(error));
        })
    }
}


export const removeFavInit = () => ({ type: actionTypes.REMOVE_FAV_INIT })

export const removeFavSuccess = (post) => {
    return {
        type: actionTypes.REMOVE_FAV_SUCCESS,
        post
    }
}

export const removeFavFailed = (error) => {
    return {
        type: actionTypes.REMOVE_FAV_FAILED,
        error
    }
}

export const removeFav = (token, userid, shouldfav, photoid) => {
    return dispatch => {
        dispatch(removeFavInit())
        const data = { token, userid, shouldfav, photoid }
        fetch(API.favorite, data).then((data) => {
            console.log(data)
            dispatch(removeFavSuccess(data));
        }).catch((error) => {
            dispatch(removeFavFailed(error));
        })
    }
}



export const editProfileInit = () => ({ type: actionTypes.EDIT_PROFILE_INIT })

export const editProfileSuccess = (user) => {
    return {
        type: actionTypes.EDIT_PROFILE_SUCCESS,
        user
    }
}

export const editProfileFailed = (error) => {
    return {
        type: actionTypes.EDIT_PROFILE_FAILED,
        error
    }
}

export const editProfile = (token, password, email, userid) => {
    return dispatch => {
        dispatch(editProfileInit())
        const data = { token, password, email, userid }
        fetch(API.favorite, data).then((data) => {
            console.log(data)
            dispatch(editProfileSuccess(data));
        }).catch((error) => {
            dispatch(editProfileFailed(error));
        })
    }
}