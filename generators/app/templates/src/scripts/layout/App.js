/* global __SHOW_DEV_TOOLS__ */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';

// 是否显示开发者工具
let DevTools;

if(__SHOW_DEV_TOOLS__) {
    DevTools = require('./DevTools').default;
}

// 主应用入口
const App = ({ store }) => {
    return (
        <Provider store={store}>
            <div>
                { routes }
                { DevTools && <DevTools /> }
            </div>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object,
};

export default App;
