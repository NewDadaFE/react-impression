import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// Hot loader
if (module.hot) {
    let AppContainer = require('react-hot-loader').AppContainer;

    render(
        <AppContainer>
            <App />
        </AppContainer>,
        root
    );

    // v3.0.0起支持组件热加载
    module.hot.accept('./App', () => {
        let App = require('./App').default;

        render(
            <AppContainer>
                <App />
            </AppContainer>,
            root
        );
    });
} else {
    render(<App />, root);
}
