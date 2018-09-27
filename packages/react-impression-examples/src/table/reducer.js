import { createAction, handleActions } from 'redux-actions'
import dotProp from 'dot-prop-immutable'

// Action Creators
export const increment = createAction('table/COUNTER_INCREMENT')

export const decrement = createAction('table/COUNTER_DECREMENT')

export const incrementAsync = () => dispatch =>
  setTimeout(() => dispatch(increment()), 1000)

// Reducer
const initialState = {
  total: 0,
}

const reducer = handleActions(
  {
    [increment]: state => dotProp.set(state, 'total', state.total + 1),

    [decrement]: state => dotProp.set(state, 'total', state.total - 1),
  },
  initialState
)

export default reducer
