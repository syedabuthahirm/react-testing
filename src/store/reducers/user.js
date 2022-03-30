import { SET_USER, SET_LOADING } from '../action-reducers/user';

const initState = { user: null, loading: true };

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}