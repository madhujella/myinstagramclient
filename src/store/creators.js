import * as actionTypes from './actionTypes';
import * as API from '../API';

export const logout = () => {
    console.log('logout action')
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

export const authRegSuccess = (data) => {
    return {
        type: actionTypes.AUTH_REG_SUCCESS,
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
        const body = `username=${username}&password=${password}`
        console.log(body)
        const data = {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        fetch(API.login, data)
            .then((res) => res.json())
            .then((data) => {
                if (!data.token) {
                    dispatch(authFail(data));
                    return;
                }
                console.log(data)
                dispatch(authSuccess(data));
                localStorage.setItem('cred', JSON.stringify(data));
            }).catch((error) => {
                dispatch(authFail(error));
            })
    }
}

export const register = (email, username, password) => {
    return dispatch => {
        dispatch(authInit())
        const body = `email=${encodeURI(email)}&username=${encodeURI(username)}&password=${encodeURI(password)}`
        const data = {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        fetch(API.register, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(authRegSuccess(data));
        })
        .catch((error) => {
            dispatch(authFail(error));
        })
    }
}

export const authCheck = () => {
    return dispatch => {
        dispatch(authInit())
        const cred = localStorage.getItem('cred');
        const data = JSON.parse(cred)
        if (!data) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(data));
        }
    };
};

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.REDIRECT_PATH,
        path
    };
};


export const getUserInit = () => ({ type: actionTypes.FETCH_POSTS_INIT })

export const getUserSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        data
    }
}

export const getLoggedUserSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MY_POSTS_SUCCESS,
        data
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
        fetch(API.user + '/' + encodeURIComponent(userid))
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(getUserSuccess(data));
        }).catch((error) => {
            dispatch(getUserFailed(error));
        })
    }
}

export const getLoggedUserPosts = (userid, token) => {
    return dispatch => {
        dispatch(getUserInit())
        const data = {
            method: 'GET',
            headers: { 
                'Authorization': 'Bearer ' + token
            },
        }
        fetch(API.mainpage, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(getLoggedUserSuccess(data));
        }).catch((error) => {
            dispatch(getUserFailed(error));
        })
    }
}



export const getPostInit = () => ({ type: actionTypes.FETCH_POST_INIT })

export const getPostSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        data
    }
}

export const getPostFailed = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAILED,
        error
    }
}

export const getPost = (postid, userid, token) => {
    return dispatch => {
        dispatch(getPostInit())
        let url = `${API.post}/${encodeURI(postid)}`;
        let data = {};
        if(userid) {
            url = `${url}/${encodeURI(userid)}`;
            data = {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + token
                },
            }
        }
        console.log('postsurl', url, data, userid)
        fetch(url, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(getPostSuccess(data));
        }).catch((error) => {
            dispatch(getPostFailed(error));
        })
    }
}



export const addFavInit = () => ({ type: actionTypes.ADD_FAV_INIT })

export const addFavSuccess = (data) => {
    return {
        type: actionTypes.ADD_FAV_SUCCESS,
        data
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
        const body = `token=${encodeURI(token)}&userid=${encodeURI(userid)}&shouldfav=${encodeURI(shouldfav)}&photoid=${encodeURI(photoid)}`
        const data = {
            method: 'POST',
            body,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + token
            },
        }
        console.log('addfav', body)
        fetch(API.favorite, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(addFavSuccess(data));
        })
        .catch((error) => {
            console.log(error)
            dispatch(addFavFailed(error));
        })
    }
}


export const removeFavInit = () => ({ type: actionTypes.REMOVE_FAV_INIT })

export const removeFavSuccess = (data) => {
    return {
        type: actionTypes.REMOVE_FAV_SUCCESS,
        data
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
        const body = `token=${encodeURI(token)}&userid=${encodeURI(userid)}&shouldfav=${encodeURI(shouldfav)}&photoid=${encodeURI(photoid)}`
        const data = {
            method: 'POST',
            body,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + token
            },
        }
        console.log('removefav', body)
        fetch(API.favorite, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(removeFavSuccess(data));
        })
        .catch((error) => {
            dispatch(removeFavFailed(error));
        })
    }
}



export const editProfileInit = () => ({ type: actionTypes.EDIT_PROFILE_INIT })

export const editProfileSuccess = (data) => {
    return {
        type: actionTypes.EDIT_PROFILE_SUCCESS,
        data
    }
}

export const editProfileFailed = (error) => {
    return {
        type: actionTypes.EDIT_PROFILE_FAILED,
        error
    }
}

export const editProfile = (token, password, userid) => {
    return dispatch => {
        dispatch(editProfileInit())
        const body = `token=${encodeURI(token)}&password=${encodeURI(password)}&userid=${encodeURI(userid)}`
        const data = {
            method: 'POST',
            body,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + token
            },
        }
        console.log(body)
        fetch(API.editprofile, data)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(editProfileSuccess(data));
        })
        .catch((error) => {
            dispatch(editProfileFailed(error));
        })
    }
}