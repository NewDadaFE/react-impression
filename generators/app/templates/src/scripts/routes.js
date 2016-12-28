import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Layout from './layout';
import CounterView from './views/CounterView';


// 路由配置
export default (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="index" component={CounterView} />
            <IndexRoute component={CounterView} />
        </Route>
    </Router>
);

