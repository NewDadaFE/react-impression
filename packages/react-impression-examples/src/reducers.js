import { combineReducers } from 'redux'
import home from 'home/reducer'
import table from 'table/reduer'

const reducer = combineReducers({
  home,
  table,
})

export default reducer
