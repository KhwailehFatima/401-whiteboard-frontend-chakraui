import axios from "axios";
import { actionType } from "../config/constant";

export const signUp = (dispatch, payload) => {
    try {
         if (payload.error) {
            dispatch({
                type: actionType.SIGNUP_FAILURE,
                payload: payload.error,
            });
        } else {
            dispatch({ type: actionType.REQUEST_SIGNUP });
            axios.post(`${process.env.REACT_APP_HEROKU_URI}/signup`, payload)
                .then((res) => {
                    dispatch({ type: actionType.SIGNUP_SUCCESS, payload: res.data });
                    window.location.href = '/signin';
                })
                .catch((error) =>
                    dispatch({ type: actionType.SIGNUP_FAILURE, payload: error }));

        }
    }
    catch (error) {

        dispatch({ type: actionType.SIGNUP_FAILURE, payload: error });

    }
};
export const login = (dispatch, payload) => {
    try {
        dispatch({ type: actionType.REQUEST_LOGIN });
        axios
            .post(`${process.env.REACT_APP_HEROKU_URI}/signin`, {},
                {
                    headers: {
                        Authorization: `Basic ${payload}`,
                    },
                }
            )
            .then((res) => {
                dispatch({ type: actionType.LOGIN_SUCCESS, payload: res.data });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('currentUser', JSON.stringify(res.data.user));
                window.location.href = '/post'
            })
            .catch((error) =>
                dispatch({ type: actionType.LOGIN_FAILURE, payload: error })
            );

    } catch (error) {
        dispatch({ type: actionType.LOGIN_FAILURE, payload: error })
    }
};

export const logout = (dispatch) => {
    try {
        dispatch({ type: actionType.LOGOUT_SUCCESS });
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    } catch (error) {
        dispatch({ type: actionType.LOGOUT_FAILURE, payload: error })
    }
};