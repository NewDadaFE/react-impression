import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import CounterView from './views/CounterView';

// 路由配置
const routes = (
    <Route path="/" component={Layout}>
        <Route path="index" component={CounterView} />
        <IndexRoute component={CounterView} />
    </Route>
);

export default routes;
