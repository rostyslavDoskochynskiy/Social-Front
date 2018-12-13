import {
    AUTH_FAILED,
    AUTH_START,
    AUTH_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN,
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
        case SIGN_IN:
            return {
                ...state,
                user: payload,
                loggedIn: true,
                isReg: true,
                initialChecking: false,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;