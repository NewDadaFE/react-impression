import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

// 初始值
const init = {
    total: 0,
};

export default function counter(state = init, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                total: state.total + 1,
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                total: state.total - 1,
            };
        default:
            return state;
        }
}
