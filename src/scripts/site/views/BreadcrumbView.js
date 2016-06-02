import React, { Component } from 'react';
import { Card, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class BreadcrumbView extends Component{
    render(){
        let routes = [{
            path: 'Home',
        }, {
            path: 'Library',
        }, {
            path: 'Data'
        }];

        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Breadcrumb routes={routes}></Breadcrumb>
                </Card>
                <h3>Arrow divider</h3>
                <Card block>
                    <Breadcrumb routes={routes} divider="arrow"></Breadcrumb>
                </Card>
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

BreadcrumbView.title = "Breadcrumb";