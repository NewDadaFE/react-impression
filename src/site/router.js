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
import MessageExample from './examples/message'
import NotificationExample from './examples/notification'
import ConfirmExample from './examples/confirm'
import ModalExample from './examples/modal'
import BreadcrumbExample from './examples/breadcrumb'
import DropdownExample from './examples/dropdown'
import ImageExample from './examples/image'
import LoadingExample from './examples/loading'
import SwitchExample from './examples/switch'

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
    <Route path='message' component={MessageExample} />
    <Route path='notification' component={NotificationExample} />
    <Route path='confirm' component={ConfirmExample} />
    <Route path='modal' component={ModalExample} />
    <Route path='breadcrumb' component={BreadcrumbExample} />
    <Route path='dropdown' component={DropdownExample} />
    <Route path='image' component={ImageExample} />
    <Route path='loading' component={LoadingExample} />
    <Route path='switch' component={SwitchExample} />
  </Route>
)

export default routers
