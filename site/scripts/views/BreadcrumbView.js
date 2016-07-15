import React, { Component } from 'react';
import { Card, Breadcrumb } from '../components/base';
import { CommenTable } from '../components';

export default class BreadcrumbView extends Component{
    render(){
        let routes = [{
            path: 'Home',
        }, {
            path: 'Library',
        }, {
            path: 'Breadcrumb'
        }];

        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Breadcrumb className="no-padding" routes={routes}></Breadcrumb>
                    </Card>
                    <h3>Arrow divider</h3>
                    <Card block>
                        <Breadcrumb className="no-padding" routes={routes} divider="arrow"></Breadcrumb>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['divider', '设置分隔符，可选值为 arrow', 'string', ''],
                            ['routes', '设置路径，必填，key 值为 path(路径) 和 clickable(是否可点击)', 'arrayOf(object)', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

BreadcrumbView.title = 'Breadcrumb';
