import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

const composeEnhancers = composeWithDevTools({})
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

if (DEBUG) {
  if (module.hot) {
    module.hot.accept('./reducers', store.replaceReducer(reducer))
  }
}

export default store
