import React, { Component } from 'react';
import { Card, Row, Col, Nav, Breadcrumb } from '../../components';
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
                            <Col>
                                <Nav activeKey={1} onSelect={this.selectHandle} type="inline">
                                    <Nav.Item eventKey={1}>Active</Nav.Item>
                                    <Nav.Item eventKey={2}>Link</Nav.Item>
                                    <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                                    <Nav.Item eventKey={4} disabled>Disabled</Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Tabs</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Nav activeKey={1} onSelect={this.selectHandle} type="tab">
                                    <Nav.Item eventKey={1}>Active</Nav.Item>
                                    <Nav.Item eventKey={2}>Link</Nav.Item>
                                    <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                                    <Nav.Item eventKey={4} disabled>Disabled</Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Pills</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Nav activeKey={1} onSelect={this.selectHandle} type="pill">
                                    <Nav.Item>Active</Nav.Item>
                                    <Nav.Item>Link</Nav.Item>
                                    <Nav.Item>Anothor link</Nav.Item>
                                    <Nav.Item disabled>Disabled</Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Stacked pills</h3>
                    <Card block>
                        <Row>
                            <Col col="3">
                                <Card>
                                    <Nav activeKey={2} onSelect={this.selectHandle} type="pill" stacked>
                                        <Nav.Item eventKey={1}>Active</Nav.Item>
                                        <Nav.Item eventKey={2}>Link</Nav.Item>
                                        <Nav.Item eventKey={3}>Anothor link</Nav.Item>
                                        <Nav.Item eventKey={4} disabled>Disabled</Nav.Item>
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
                    <h3 className="text-secondary">Nav.Item API</h3>
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

NavView.title = 'Nav';