import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Layout from 'app/components/Layout'
import Home from 'home'
import Table from 'table'

// 路由配置
const createRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='table' component={Table} />
    <Redirect from='*' to='/' />
  </Route>
)

export default createRoutes
