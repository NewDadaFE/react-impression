import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Layout from './Layout';
import ImageView from '../views/ImageView';
import TableView from '../views/TableView';
import LayoutView from '../views/LayoutView';
import ButtonView from '../views/ButtonView';
import CheckboxView from '../views/CheckboxView';
import RadioView from '../views/RadioView';
import SwitchView from '../views/SwitchView';
import ButtonGroupView from '../views/ButtonGroupView';
import InputGroupView from '../views/InputGroupView';
import TagView from '../views/TagView';
import BadgeView from '../views/BadgeView';
import AttentionView from '../views/AttentionView';
import CardView from '../views/CardView';
import BreadcrumbView from '../views/BreadcrumbView';
import ProgressView from '../views/ProgressView';
import PaginationView from '../views/PaginationView';
import ListGroupView from '../views/ListGroupView';
import ModalView from '../views/ModalView';
import TooltipView from '../views/TooltipView';
import PopoverView from '../views/PopoverView';
import NavView from '../views/NavView';
import NavbarView from '../views/NavbarView';
import SelectView from '../views/SelectView';
import FormView from '../views/FormView';
import DropdownView from '../views/DropdownView';
import MessageView from '../views/MessageView';
import NotificationView from '../views/NotificationView';
import TimelineView from '../views/TimelineView';
import DatePickerView from '../views/DatePickerView';
import LoadingView from '../views/LoadingView';
import CalendarView from '../views/CalendarView';
import InputView from '../views/InputView';
import InlineSelectView from '../views/InlineSelectView';
import ConfirmView from '../views/ConfirmView';
import AlertView from '../views/AlertView';
import UploadView from '../views/UploadView';
import UtilsClassView from '../views/UtilsClassView';
import LoginView from '../views/LoginView';

/**
 * 主应用入口.
 */
const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={LoginView} />
                <Route path="login" component={LoginView} />
                <Route path="app" component={Layout}>
                    <IndexRoute component={ButtonView} />
                    <Route path="button" component={ButtonView} />
                    <Route path="image" component={ImageView} />
                    <Route path="table" component={TableView} />
                    <Route path="layout" component={LayoutView} />
                    <Route path="checkbox" component={CheckboxView} />
                    <Route path="radio" component={RadioView} />
                    <Route path="switch" component={SwitchView} />
                    <Route path="button-group" component={ButtonGroupView} />
                    <Route path="input-group" component={InputGroupView} />
                    <Route path="select" component={SelectView} />
                    <Route path="tag" component={TagView} />
                    <Route path="badge" component={BadgeView} />
                    <Route path="attention" component={AttentionView} />
                    <Route path="card" component={CardView} />
                    <Route path="breadcrumb" component={BreadcrumbView} />
                    <Route path="progress" component={ProgressView} />
                    <Route path="pagination" component={PaginationView} />
                    <Route path="list-group" component={ListGroupView} />
                    <Route path="modal" component={ModalView} />
                    <Route path="tooltip" component={TooltipView} />
                    <Route path="popover" component={PopoverView} />
                    <Route path="nav" component={NavView} />
                    <Route path="navbar" component={NavbarView} />
                    <Route path="form" component={FormView} />
                    <Route path="dropdown" component={DropdownView} />
                    <Route path="message" component={MessageView} />
                    <Route path="notification" component={NotificationView} />
                    <Route path="timeline" component={TimelineView} />
                    <Route path="datepicker" component={DatePickerView} />
                    <Route path="loading" component={LoadingView} />
                    <Route path="calendar" component={CalendarView} />
                    <Route path="input" component={InputView} />
                    <Route path="inline-select" component={InlineSelectView} />
                    <Route path="confirm" component={ConfirmView} />
                    <Route path="alert" component={AlertView} />
                    <Route path="upload" component={UploadView} />
                    <Route path="utilsClass" component={UtilsClassView} />
                </Route>
            </Route>
        </Router>
    );
};

export default App;
