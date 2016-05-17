import React, { Component } from 'react';
import { Breadcrumb } from '../components';


export default class BreadcrumbView extends Component{
    render(){
        let path = [{
            name: 'Home',
            href: 'http://wwww.google.com'
        }, {
            name: 'Library',
            href: 'http://wwww.apple.com'
        }, {
            name: 'Data'
        }];

        return (
            <div>
                <h3>Examples</h3>
                <div className="card">
                    <Breadcrumb path={path}></Breadcrumb>
                </div>
                <h3>Arrow divider</h3>
                <div className="card">
                    <Breadcrumb path={path} divider="arrow"></Breadcrumb>
                </div>
            </div>
        );
    }
}