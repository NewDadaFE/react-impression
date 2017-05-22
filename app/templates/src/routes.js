import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from 'app/components/Layout';
import Home from 'home';

// 路由配置
const createRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Redirect from="*" to="/" />
  </Route>
);

export default createRoutes;
