import React, { Component } from 'react';
import { Row, Col, Card, Form, Select } from '../../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <h3>Select</h3>
                <Row>
                    <Col col="6">
                        <Card block>
                            <Form type="inline">
                                <Form.Group>
                                    <label>interest:</label>
                                    <Select>
                                        <Select.Option value="1">First</Select.Option>
                                        <Select.Option value="2">Second</Select.Option>
                                        <Select.Option value="3">Third</Select.Option>
                                    </Select>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col col="6">
                        <Card block>
                            <Form type="inline">
                                <Form.Group>
                                    <label>disabled:</label>
                                    <Select disabled>
                                        <Select.Option value="1">First</Select.Option>
                                        <Select.Option value="2">Second</Select.Option>
                                        <Select.Option value="3">Third</Select.Option>
                                    </Select>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}