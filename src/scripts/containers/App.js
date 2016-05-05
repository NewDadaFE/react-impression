import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Layout from '../containers/Layout';
import Buttons from '../views/Buttons';

/**
 * 主应用入口.
 */
export default class App extends Component {
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <Route path='buttons' component={Buttons}/>
                </Route>
            </Router>
        );
    }
}
