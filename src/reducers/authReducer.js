import { actionType  } from "../config/constant";

export const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case actionType.REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: {
                    username: action.payload.user.username,
                    role: action.payload.user.role,
                    email: action.payload.user.email,
                    token: action.payload.token,
                    userId: action.payload.user.id,
                    // capabilities: action.payload.capabilities,
                },
                token: action.payload.token,
            };
        case actionType.LOGIN_FAILURE:
            return {
                ...state,
                user: {},
                loading: false,
                isNotLogged: true,
                error: action.payload,
            };
        case actionType.REQUEST_LOGOUT:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: false,
                user: {},
            };
        case actionType.LOGOUT_FAILURE:
            return {
                ...state,
                
                loading: false,
                error: action.payload,
            };
        case actionType.REQUEST_SIGNUP:
            return {
                ...state,
                loading: true,
            };
        case actionType.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionType.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                isPassword: true,
                error: action.payload,
            };
        default:
            return state;
    }
};
