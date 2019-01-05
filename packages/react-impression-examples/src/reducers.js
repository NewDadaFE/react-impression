import { combineReducers } from 'redux'
import home from 'src/home/reducer'
import table from 'src/table/reducer'

const reducer = combineReducers({
  home,
  table,
})

export default reducer
