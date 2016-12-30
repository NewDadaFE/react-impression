import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

const App = () => {
    return (
        <Router history={hashHistory} routes={routes} />
    );
};

export default App;
