import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './layout/'
import ButtonExample from './examples/button/'

const routers = (
  <Route path='/' component={Layout}>
    <IndexRoute component={ButtonExample} />
  </Route>
)

export default routers
