import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Layout from '../containers/Layout';
import Image from '../views/Image';
import Table from '../views/Table';
import ButtonView from '../views/ButtonView';
import ButtonGroup from '../views/ButtonGroup';
import InputGroup from '../views/InputGroup';
import Tag from '../views/Tag';
import Alert from '../views/Alert';
import Card from '../views/Card';
import Breadcrumb from '../views/Breadcrumb';
import Progress from '../views/Progress';
import Pagination from '../views/Pagination';
import ListGroup from '../views/ListGroup';

/**
 * 主应用入口.
 */
export default class App extends Component {
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <Route path='image' component={Image}/>
                    <Route path='table' component={Table}/>
                    <Route path='button' component={ButtonView}/>
                    <Route path='button-group' component={ButtonGroup}/>
                    <Route path='input-group' component={InputGroup}/>
                    <Route path='tag' component={Tag}/>
                    <Route path='alert' component={Alert}/>
                    <Route path='card' component={Card}/>
                    <Route path='breadcrumb' component={Breadcrumb}/>
                    <Route path='progress' component={Progress}/>
                    <Route path='pagination' component={Pagination}/>
                    <Route path='list-group' component={ListGroup}/>
                </Route>
            </Router>
        );
    }
}
