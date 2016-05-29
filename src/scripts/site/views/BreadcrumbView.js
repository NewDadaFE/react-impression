import React, { Component } from 'react';
import { Breadcrumb } from '../../components';
import { CommenTable } from '../components';

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
                <h3 className="text-secondary">API</h3>
                <CommenTable
                    data = {[
                        ['divider', '设置分隔符，可选值为 arrow', 'string', ''],
                        ['path', '设置路径，必填', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}