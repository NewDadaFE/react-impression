import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Layout from 'src/app/components/Layout'
import Table from 'src/table'
import Overview from 'src/overview'
import FormContainer from 'src/form'

// 路由配置
const createRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Table} />
    <Route path='table' component={Table} />
    <Route path='overview' component={Overview} />
    <Route path='form' component={FormContainer} />
    <Redirect from='*' to='/' />
  </Route>
)

export default createRoutes
