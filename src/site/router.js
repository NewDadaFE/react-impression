import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './layout/'
import ButtonExample from './examples/button/'
import RadioExample from './examples/radio/'

const routers = (
  <Route path='/' component={Layout}>
    <IndexRoute component={ButtonExample} />
    <Route path='button' component={ButtonExample} />
    <Route path='radio' component={RadioExample} />
  </Route>
)

export default routers
