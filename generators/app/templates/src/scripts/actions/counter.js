import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

// 加
export const increment = () => {
    return {
        type: INCREMENT_COUNTER,
    };
};

// 减
export const decrement = () => {
    return {
        type: DECREMENT_COUNTER,
    };
};

// 异步加
export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
};
