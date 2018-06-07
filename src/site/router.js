import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './layout/'
import ButtonExample from './examples/button/'
import RadioExample from './examples/radio/'
import CheckboxExample from './examples/checkbox'
import TooltipExample from './examples/tooltip'
import PopoverExample from './examples/popover'
import CardExample from './examples/card'
import NavExample from './examples/nav'
import NavbarExample from './examples/navbar'
import InlineSelectExample from './examples/inline-select'
import AlertViewExample from './examples/alert'
import LayoutExample from './examples/layout'

const routers = (
  <Route path='/' component={Layout}>
    <IndexRoute component={ButtonExample} />
    <Route path='button' component={ButtonExample} />
    <Route path='radio' component={RadioExample} />
    <Route path='tooltip' component={TooltipExample} />
    <Route path='popover' component={PopoverExample} />
    <Route path='card' component={CardExample} />
    <Route path='checkbox' component={CheckboxExample} />
    <Route path='nav' component={NavExample} />
    <Route path='navbar' component={NavbarExample} />
    <Route path='inline-select' component={InlineSelectExample} />
    <Route path='alert' component={AlertViewExample} />
    <Route path='layout' component={LayoutExample} />
  </Route>
)

export default routers
