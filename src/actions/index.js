import * as axios from "axios";
import {
    AUTH_FAILED,
    AUTH_START,
    AUTH_SUCCESS,
    SIGN_IN,
    LOG_OUT,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
} from "./types";
import {message} from "antd";

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
    userCredentials = JSON.stringify(userCredentials);
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    let response = await axios.post('auth/local/signin', userCredentials, axiosConfig);
    const {data} = response;
    dispatch({
        type: SIGN_IN,
        payload: data,
        loggedIn: true
    });
    return data;
};

export const logOutUser = () => async dispatch => {
    try {
        let response = await axios.get('auth/logout');
        dispatch({
            type: LOG_OUT,
            loggedIn: false,
            auth: false,
            user: null
        });
        return response.data;
    } catch (e) {
        return e;
    }

};
