import { createAction, handleActions } from 'redux-actions'
import dotProp from 'dot-prop-immutable'

// Action Creators
export const setCityId = createAction('TABLE/SETCITYID')
export const setRuleId = createAction('TABLE/SETRULEID')

// Reducer
const initialState = {
  total: 0,
  cityId: 0,
  ruleId: 1,
}

const reducer = handleActions(
  {
    [setCityId]: (state, val) => dotProp.set(state, 'cityId', val.payload),
    [setRuleId]: (state, val) => dotProp.set(state, 'ruleId', val.payload),
  },
  initialState
)

export default reducer
