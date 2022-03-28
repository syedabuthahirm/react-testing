export const INCREMENT = 'counter/INCREMENT';
export const INCREMENTBY = 'counter/INCREMENTBY';
export const DECREMENT = 'counter/DECREMENT';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function incrementBy(addBy) {
    return {
        type: INCREMENTBY,
        payload: addBy
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}