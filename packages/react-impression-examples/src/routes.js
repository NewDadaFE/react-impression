import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Layout from 'app/components/Layout'
import Home from 'home'
import Overview from 'overview'

// 路由配置
const createRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='overview' component={Overview} />
    <Redirect from='*' to='/login' />
  </Route>
)

export default createRoutes
