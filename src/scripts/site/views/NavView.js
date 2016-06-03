import React, { Component } from 'react';
import { Card, Row, Col, NavItem, Nav, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class NavView extends Component{
    selectHandle(selectKey){
        // console.log(selectKey);
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Inline</h3>
                    <Card block>
                        <Row>
                            <Col col="12">
                                <Nav activeKey={1} onSelect={this.selectHandle} type="inline">
                                    <NavItem eventKey={1}>Active</NavItem>
                                    <NavItem eventKey={2}>Link</NavItem>
                                    <NavItem eventKey={3}>Anothor link</NavItem>
                                    <NavItem eventKey={4} disabled>Disabled</NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Tabs</h3>
                    <Card block>
                        <Row>
                            <Col col="12">
                                <Nav activeKey={2} onSelect={this.selectHandle} type="tab">
                                    <NavItem eventKey={1}>Active</NavItem>
                                    <NavItem eventKey={2}>Link</NavItem>
                                    <NavItem eventKey={3}>Anothor link</NavItem>
                                    <NavItem eventKey={4} disabled>Disabled</NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Pills</h3>
                    <Card block>
                        <Row>
                            <Col col="12">
                                <Nav activeKey={2} onSelect={this.selectHandle} type="pill">
                                    <NavItem >Active</NavItem>
                                    <NavItem >Link</NavItem>
                                    <NavItem >Anothor link</NavItem>
                                    <NavItem  disabled>Disabled</NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Stacked pills</h3>
                    <Card block>
                        <Row>
                            <Col col="12">
                                <Card>
                                    <Nav activeKey={2} onSelect={this.selectHandle} type="pill" stacked>
                                        <NavItem eventKey={1}>Active</NavItem>
                                        <NavItem eventKey={2}>Link</NavItem>
                                        <NavItem eventKey={3}>Anothor link</NavItem>
                                        <NavItem eventKey={4} disabled>Disabled</NavItem>
                                    </Nav>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">Nav API</h3>
                    <CommenTable
                        data = {[
                            ['type', '导航栏样式，可选值为 tab、pill、inline', 'string', 'inline'],
                            ['stacked', '是否纵向排列', 'boolean', 'false'],
                            ['activeKey', '设置默认激活标签', 'number', ''],
                            ['onSelect', '选中回调函数', 'function', ''],
                        ]}
                    ></CommenTable>
                    <h3 className="text-secondary">NavItem API</h3>
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
                </Card>
            </div>
        );
    }
}

NavView.title = "Nav";