import * as axios from "axios";
import {
    AUTH_START,
    AUTH_FAILED,
    AUTH_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_START,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    LOG_OUT,
} from "./types";

export const authCheck = () => async dispatch => {
    dispatch ( authStart () );
    try {
        let response = await axios.get('/auth/principal');
        const { auth, user } = response.data;
        return dispatch (auth ? authSuccess(user) : authFailed());
    } catch (e) {
        return dispatch(authFailed(e))
    }
};

export const authStart = () => {
    return {
        type: AUTH_START,
    };
};

export const authSuccess = ( user = {} ) => {
    return {
        type:  AUTH_SUCCESS,
        loggedIn: true,
        user,
    };
};

export const authFailed = ( error = null ) => {
    return {
        type: AUTH_FAILED,
        loggedIn: false,
        error,
    };
};

export const signUp = user => async dispatch => {
    dispatch ( signUpStart () );
    try {
        user = JSON.stringify(user);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        let response = await axios.post('/auth/local/signup', user, axiosConfig);
        const { data } = response;
        return dispatch( data.isReg ? signUpSuccess(data) : signUpFailed());
    } catch (e) {
        e = e.response.data.message;
        return dispatch(signUpFailed(e))
    }
};

const signUpStart = () => {
    return {
        type: SIGN_UP_START,
    };
};

const signUpSuccess = ( data = {} ) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    };
};

const signUpFailed = (error = null) => {
    return {
        type: SIGN_UP_FAILED,
        error,
    };
};

export const signIn = userCredentials => async dispatch => {
    dispatch ( signInStart () );
    try {
        userCredentials = JSON.stringify(userCredentials);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let response = await axios.post('/auth/local/signin', userCredentials, axiosConfig);
        const { data } = response;
        return dispatch( data ? signInSuccess(data) : signInFailed());
    } catch (e) {
        return dispatch(signInFailed(e.response.statusText))
    }
};

const signInStart = () => {
    return {
        type: SIGN_IN_START,
    };
};

const signInSuccess = ( data = {} ) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: data,
    };
};


const signInFailed = (error = null) => {
    return {
        type: SIGN_IN_FAILED,
        error,
    };
};

export const logOutUser = () => async dispatch => {
    try {
        let response = await axios.get('/auth/logout');
        dispatch({
            type: LOG_OUT,
            loggedIn: false,
            auth: false,
            user: null,
        });
        return response.data;
    } catch (e) {
        return e;
    }
};
