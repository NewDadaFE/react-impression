/* global __ENABLE_LOG__, __SHOW_DEV_TOOLS__ */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


let composeItems = [],
    middleware;

// 是否打印日志
if(__ENABLE_LOG__) {
    let logger = require('redux-logger');

    middleware = applyMiddleware(thunk, logger());
}else{
    middleware = applyMiddleware(thunk);
}
composeItems.push(middleware);

// 是否同步至开发者工具
if(__SHOW_DEV_TOOLS__) {
    let DevTools = require('./layout/DevTools').default,
        persistState = require('redux-devtools').persistState;

    composeItems.push(DevTools.instrument());
    composeItems.push(persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    ));
}


const enhancer = compose(...composeItems);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    // reducer热加载
    if(module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers').default)
        );
    }

    return store;
}
