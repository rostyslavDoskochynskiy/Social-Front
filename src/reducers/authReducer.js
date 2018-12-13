import {
    AUTH_START,
    AUTH_FAILED,
    AUTH_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_START,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS, LOG_OUT

} from "../actions/types";

const initialState = {
    user: null,
    loggedIn: false,
    initialChecking: true,
    isReg: false,
    error: null,
    loading: true,
};

const reducer = ( state = initialState, action ) => {
    const {type, user, loggedIn, error, payload} = action;
    switch ( type ) {
        case AUTH_START:
            return {
                ...state,
                initialChecking: true,
                loading: true,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                user:            user,
                loggedIn:        true,
                initialChecking: false,
                loading:         false,
            };
        case AUTH_FAILED:
            return {
                ...state,
                error:           error,
                loggedIn:        loggedIn,
                initialChecking: false,
                loading:         false,
            };
        case SIGN_UP_START:
            return {
                ...state
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                user: {...payload},
                isReg: true
            };
        case SIGN_UP_FAILED:
            return {
                ...state,
                user: null,
                isReg: false,
                loggedIn: false,
                error
            };
        case SIGN_IN_START:
            console.log(action);
            return {
                ...state,

            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                user: null,
                loggedIn: false,
                error
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: payload.user,
                isReg: true,
                loggedIn: payload.loggedIn
            };
        case LOG_OUT:
            console.log(action);
            return {
                ...state,
                user: null,
                loggedIn: payload.loggedIn
            };
        default:
            return state;
    }
};

export default reducer;