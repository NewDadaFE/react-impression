import React, { Component } from 'react';
import { Card } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components';

export default class BreadcrumbView extends Component{
    render(){
        let routes = [{
            name: 'Home',
            path: '/'
        }, {
            name: 'library'
        }, {
            name: 'Breadcrumb'
        }];

        return (
            <div>
                <Breadcrumb routes={this.props.routes} />
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card>
                        <Card.Block>
                            <Breadcrumb className="no-padding" routes={routes}></Breadcrumb>
                        </Card.Block>
                        <Highlight>
                            {`import { Breadcrumb } from 'impression-react';\n\nlet routes = [{name: 'Home', path: '/'}, {name: 'library'}, {name: 'Breadcrumb'}];\n<Breadcrumb className="no-padding" routes={routes}></Breadcrumb>`}
                        </Highlight>
                    </Card>
                    <h3>Arrow divider</h3>
                    <Card>
                        <Card.Block>
                            <Breadcrumb className="no-padding" routes={routes} divider="arrow"></Breadcrumb>
                        </Card.Block>
                        <Highlight>
                            {`let routes = ...;\n<Breadcrumb className="no-padding" routes={routes} divider="arrow"></Breadcrumb>`}
                        </Highlight>
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
