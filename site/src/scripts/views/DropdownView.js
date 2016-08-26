import React, { Component } from 'react';
import { Card, Button, Dropdown, Breadcrumb } from '../components/impression';
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
                    <h5>Basic</h5>
                    <Card block>
                        <Dropdown>
                            <Dropdown.Trigger trigger="click">
                                <Button theme="primary">Dropdown</Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.MenuItem>菜单一</Dropdown.MenuItem>
                                <Dropdown.MenuItem>菜单二</Dropdown.MenuItem>
                                <Dropdown.MenuItem>菜单三</Dropdown.MenuItem>
                                <Dropdown.MenuDivider/>
                                <Dropdown.MenuItem>菜单三</Dropdown.MenuItem>
                                <Dropdown.MenuItem>菜单四</Dropdown.MenuItem>
                                <Dropdown.MenuItem>菜单五</Dropdown.MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card>
                    <h5>Dropdown API</h5>
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
