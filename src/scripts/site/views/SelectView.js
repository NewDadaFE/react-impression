import React, { Component } from 'react';
import { Row, Col, Card, Form, Select } from '../../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <h3>Select</h3>
                <Card block>
                    <Row>
                        <Col col="6">
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
                        <Col col="6">
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
                        <Col col="6">
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
                        <Col col="6">
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
            </div>
        );
    }
}