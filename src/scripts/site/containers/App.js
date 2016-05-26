import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Layout from './Layout';
import ImageView from '../views/ImageView';
import TableView from '../views/TableView';
import ButtonView from '../views/ButtonView';
import ButtonGroupView from '../views/ButtonGroupView';
import InputGroupView from '../views/InputGroupView';
import TagView from '../views/TagView';
import AlertView from '../views/AlertView';
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
import FormView from '../views/FormView';
import DropdownView from '../views/DropdownView';
import MessageView from '../views/MessageView';
import NotificationView from '../views/NotificationView';
import TimelineView from '../views/TimelineView';
import DatePickerView from '../views/DatePickerView';

/**
 * 主应用入口.
 */
export default class App extends Component {
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <Route path='image' component={ImageView}/>
                    <Route path='table' component={TableView}/>
                    <Route path='button' component={ButtonView}/>
                    <Route path='button-group' component={ButtonGroupView}/>
                    <Route path='input-group' component={InputGroupView}/>
                    <Route path='tag' component={TagView}/>
                    <Route path='alert' component={AlertView}/>
                    <Route path='card' component={CardView}/>
                    <Route path='breadcrumb' component={BreadcrumbView}/>
                    <Route path='progress' component={ProgressView}/>
                    <Route path='pagination' component={PaginationView}/>
                    <Route path='list-group' component={ListGroupView}/>
                    <Route path='modal' component={ModalView}/>
                    <Route path='tooltip' component={TooltipView}/>
                    <Route path='popover' component={PopoverView}/>
                    <Route path='nav' component={NavView}/>
                    <Route path='navbar' component={NavbarView}/>
                    <Route path='form' component={FormView}/>
                    <Route path='dropdown' component={DropdownView}/>
                    <Route path='message' component={MessageView}/>
                    <Route path='notification' component={NotificationView}/>
                    <Route path='timeline' component={TimelineView}/>
                    <Route path='date-picker' component={DatePickerView}/>
                </Route>
            </Router>
        );
    }
}
