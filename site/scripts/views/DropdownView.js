import React, { Component } from 'react';
import { Card, Button, Dropdown, Breadcrumb } from  '../../components';
import { CommenTable } from '../components';

export default class DropdownView extends Component{
    render(){
        let menus = [{
            name: 'First menu'
        }, {
            name: 'Second menu'

        },{
            name: 'Third menu',
            active: true

        },'-', {
            disabled: true,
            name: 'Fourth menu'
        }];

        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Example</h3>
                    <Card block>
                        <Dropdown menus={menus} trigger="hover">
                            <Button style="primary">Dropdown</Button>
                        </Dropdown>
                    </Card>
                    <h3>Dropdown API</h3>
                    <CommenTable
                        data = {[
                            ['trigger', '设置触发动作，可选值为 click、hover', 'string', 'click'],
                            ['menus', '下拉菜单选项', 'array', ''],
                            ['onClick', '点击回调函数', 'function', ''],
                            ['children', '必填，子节点', 'element', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

DropdownView.title = 'Dropdown';