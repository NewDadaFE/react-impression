import React, { Component } from 'react';
import { Row, Col, Card, Form, Select, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Select</h3>
                    <Card block>
                        <Row>
                            <Col>
                                    <Form type="inline">
                                        <Form.Group>
                                            <label>请选择:</label>
                                            <Select>
                                                <Select.Option value="1">First</Select.Option>
                                                <Select.Option value="2">Second</Select.Option>
                                                <Select.Option value="3">Third</Select.Option>
                                            </Select>
                                        </Form.Group>
                                    </Form>
                            </Col>
                            <Col>
                                    <Form type="inline">
                                        <Form.Group>
                                            <label>默认值:</label>
                                            <Select value="3">
                                                <Select.Option value="1">First</Select.Option>
                                                <Select.Option value="2">Second</Select.Option>
                                                <Select.Option value="3">Third</Select.Option>
                                            </Select>
                                        </Form.Group>
                                    </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Disabled</h3>
                    <Card block>
                        <Row>
                            <Col>
                                    <Form type="inline">
                                        <Form.Group>
                                            <label>disabled:</label>
                                            <Select disabled>
                                                <Select.Option value="1">FirstFirstFirstFirstFirstFirstFirstFirst</Select.Option>
                                                <Select.Option value="2">Second</Select.Option>
                                                <Select.Option value="3">Third</Select.Option>
                                            </Select>
                                        </Form.Group>
                                    </Form>
                            </Col>
                            <Col>
                                    <Form type="inline">
                                        <Form.Group>
                                            <label>option disabled:</label>
                                            <Select>
                                                <Select.Option value="1">First</Select.Option>
                                                <Select.Option value="2" disabled>Second</Select.Option>
                                                <Select.Option value="3">Third</Select.Option>
                                            </Select>
                                        </Form.Group>
                                    </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Select API</h3>
                    <CommenTable
                        data = {[
                            ['value', '值', 'any', ''],
                            ['disabled', '是否不可用', 'boolean', 'false'],
                            ['style', '行内样式', 'object', ''],
                            ['placeholder', '占位文字', 'string', '请选择'],
                            ['onChange', '状态变更回调函数', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h3>Select.Option API</h3>
                    <CommenTable
                        data = {[
                            ['disabled', '是否不可用', 'boolean', 'false'],
                            ['active', '是否选中', 'boolean', 'false'],
                            ['value', '必填，值', 'any', ''],
                            ['onClick', '点击回调函数', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

FormView.title = 'Form';