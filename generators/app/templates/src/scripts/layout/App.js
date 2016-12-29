/* global __SHOW_DEV_TOOLS__ */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from '../routes';

// 是否显示开发者工具
let DevTools;

if(__SHOW_DEV_TOOLS__) {
    DevTools = require('./DevTools').default;
}

// 主应用入口
class App extends Component {
    static propTypes = {
        store: PropTypes.object,
    }

    render() {
        const { store } = this.props;

        if (!this.routes) this.routes = routes;

        return (
            <Provider store={store}>
                <div>
                    <Router history={hashHistory} routes={this.routes} />
                    { DevTools && <DevTools /> }
                </div>
            </Provider>
        );
    }
}

export default App;
