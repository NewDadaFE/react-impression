import React, { Component } from 'react';
import { NavItem, Nav } from '../components';
import { CommenTable } from '../site';

export default class NavView extends Component{
    selectHandle(selectKey){
        // console.log(selectKey);
    }
    render(){
        return (
            <div>
                <h3>Inline</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={1} onSelect={this.selectHandle} type="inline">
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Tabs</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={2} onSelect={this.selectHandle} type="tab">
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={2} onSelect={this.selectHandle} type="pill">
                                <NavItem >Active</NavItem>
                                <NavItem >Link</NavItem>
                                <NavItem >Anothor link</NavItem>
                                <NavItem  disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Stacked pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="card">
                                <Nav activeKey={2} onSelect={this.selectHandle} type="pill" stacked>
                                    <NavItem eventKey={1}>Active</NavItem>
                                    <NavItem eventKey={2}>Link</NavItem>
                                    <NavItem eventKey={3}>Anothor link</NavItem>
                                    <NavItem eventKey={4} disabled>Disabled</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Nav API</h3>
                <CommenTable
                    data = {[
                        ['type', '导航栏样式，可选值为 tab、pill、inline', 'string', 'inline'],
                        ['stacked', '是否纵向排列', 'boolean', 'false'],
                        ['activeKey', '设置默认激活标签', 'number', ''],
                        ['onSelect', '选中回调函数', 'function', ''],
                    ]}
                ></CommenTable>
                <h3>NavItem API</h3>
                <CommenTable
                    data = {[
                        ['disabled', '设置是否可以选中', 'boolean', 'false'],
                        ['active', '设置是否为激活状态', 'boolean', 'false'],
                        ['eventKey', '设置事件关键字', 'any', ''],
                        ['href', '设置链接地址', 'string', ''],
                        ['onClick', '设置点击回调函数', 'function', ''],
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}