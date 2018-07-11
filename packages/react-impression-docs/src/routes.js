import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from 'src/app/components/Layout'
// basic
import ButtonView from 'src/basic/ButtonView'
import ImageView from 'src/basic/ImageView'
import TableView from 'src/basic/TableView'
import LayoutView from 'src/basic/LayoutView'
// form
import RadioView from 'src/form/RadioView'
import CheckboxView from 'src/form/CheckboxView'
import SwitchView from 'src/form/SwitchView'
import SelectView from 'src/form/SelectView'
import InputView from 'src/form/InputView'
import FormView from 'src/form/FormView'
import InputGroupView from 'src/form/InputGroupView'
import UploadView from 'src/form/UploadView'
// navigation
import NavView from 'src/navigation/NavView'
import NavbarView from 'src/navigation/NavbarView'
import BreadcrumbView from 'src/navigation/BreadcrumbView'
import PaginationView from 'src/navigation/PaginationView'
import InlineSelectView from 'src/navigation/InlineSelectView'
import TimelineView from 'src/navigation/TimelineView'
// prompt
import AttentionView from 'src/prompt/AttentionView'
import TooltipView from 'src/prompt/TooltipView'
import PopoverView from 'src/prompt/PopoverView'
import AlertView from 'src/prompt/AlertView'
import MessageView from 'src/prompt/MessageView'
import NotificationView from 'src/prompt/NotificationView'
// component
import CardView from 'src/component/CardView'
import TagView from 'src/component/TagView'
import BadgeView from 'src/component/BadgeView'
import ProgressView from 'src/component/Progress'
import ButtonGroupView from 'src/component/ButtonGroupView'
import ListGroupView from 'src/component/ListGroupView'
import ModalView from 'src/component/ModalView'
import ConfirmView from 'src/component/ConfirmView'
import DropdownView from 'src/component/DropdownView'
import DatePickerView from 'src/component/DatePickerView'
import CalendarView from 'src/component/CalendarView'
import LoadingView from 'src/component/LoadingView'
import UtilsClassView from 'src/component/UtilsClassView'
// example
import LoginView from 'src/example/LoginView'

// 路由配置
const createRoutes = () => (
  <Route path='/'>
    <IndexRoute component={LoginView} />
    <Route path='login' component={LoginView} />
    <Route path='app' component={Layout}>
      <IndexRoute component={ButtonView} />
      <Route path='button' component={ButtonView} />
      <Route path='image' component={ImageView} />
      <Route path='table' component={TableView} />
      <Route path='layout' component={LayoutView} />
      <Route path='checkbox' component={CheckboxView} />
      <Route path='radio' component={RadioView} />
      <Route path='switch' component={SwitchView} />
      <Route path='button-group' component={ButtonGroupView} />
      <Route path='input-group' component={InputGroupView} />
      <Route path='select' component={SelectView} />
      <Route path='tag' component={TagView} />
      <Route path='badge' component={BadgeView} />
      <Route path='attention' component={AttentionView} />
      <Route path='card' component={CardView} />
      <Route path='breadcrumb' component={BreadcrumbView} />
      <Route path='progress' component={ProgressView} />
      <Route path='pagination' component={PaginationView} />
      <Route path='list-group' component={ListGroupView} />
      <Route path='modal' component={ModalView} />
      <Route path='tooltip' component={TooltipView} />
      <Route path='popover' component={PopoverView} />
      <Route path='nav' component={NavView} />
      <Route path='navbar' component={NavbarView} />
      <Route path='form' component={FormView} />
      <Route path='dropdown' component={DropdownView} />
      <Route path='message' component={MessageView} />
      <Route path='notification' component={NotificationView} />
      <Route path='timeline' component={TimelineView} />
      <Route path='datepicker' component={DatePickerView} />
      <Route path='loading' component={LoadingView} />
      <Route path='calendar' component={CalendarView} />
      <Route path='input' component={InputView} />
      <Route path='inline-select' component={InlineSelectView} />
      <Route path='confirm' component={ConfirmView} />
      <Route path='alert' component={AlertView} />
      <Route path='upload' component={UploadView} />
      <Route path='utilsClass' component={UtilsClassView} />
    </Route>
  </Route>
)

export default createRoutes
