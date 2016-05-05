import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Layout from '../containers/Layout';
import Button from '../views/Button';
import ButtonGroup from '../views/ButtonGroup';

/**
 * 主应用入口.
 */
export default class App extends Component {
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <Route path='button' component={Button}/>
                    <Route path='button-group' component={ButtonGroup}/>
                </Route>
            </Router>
        );
    }
}
