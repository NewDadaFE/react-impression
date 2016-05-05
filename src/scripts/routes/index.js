import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import Layout from '../containers/Layout';
import Help from '../views/Help';

/**
 * 路由配置.
 */
export default (
     <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={Layout}>
                <IndexRoute component={Help}/>
            </IndexRoute>
        </Route>
    </Router>
);