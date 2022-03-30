import axios from 'axios';

export const SET_USER = 'user/SET_USER';
export const SET_LOADING = 'user/SET_LOADING';

export function getUser(params) {
    return (dispatch) => {
        dispatch(startLoading());
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => {
                dispatch(setUser(res.data));
                dispatch(stopLoading());
            })
            .catch((err) => {
                dispatch(stopLoading());
            });
    };
}

export function startLoading() {
    return {
        type: SET_LOADING,
        payload: true
    }
}

export function stopLoading() {
    return {
        type: SET_LOADING,
        payload: false
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}