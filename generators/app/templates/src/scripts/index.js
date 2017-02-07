import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import App from './layout/App';

const store = configureStore(),
    root = document.getElementById('root');

// Hot loader
if (module.hot) {
    let AppContainer = require('react-hot-loader').AppContainer;

    render(
        <AppContainer>
            <App store={store} />
        </AppContainer>,
        root
    );

    // v3.0.0起支持组件热加载
    module.hot.accept('./layout/App', () => {
        let App = require('./layout/App').default;

        render(
            <AppContainer>
                <App store={store} />
            </AppContainer>,
            root
        );
    });
} else {
    render(<App store={store} />, root);
}
