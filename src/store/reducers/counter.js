import { INCREMENT, DECREMENT, INCREMENTBY } from '../action-reducers/counter';

const initState = { value: 0 };

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        case INCREMENTBY:
            return { value: state.value + action.payload }
        default:
            return state
    }
}