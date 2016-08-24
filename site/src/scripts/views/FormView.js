import React, { Component } from 'react';
import { Card, Col, Checkbox, Radio, RadioGroup, Form, Input, Button, Breadcrumb } from '../components/impression';
import { CommenTable } from '../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Form inline</h3>
                    <Card block>
                        <Form>
                            <Form.Group>
                                <label>Name:</label>
                                <Input type="text" placeholder="Jane Doe"/>
                            </Form.Group>
                            <Form.Group>
                                <label>Email</label>
                                <Input type="text" placeholder="hello@example.com"/>
                            </Form.Group>
                            <Form.Group>
                                <Checkbox defaultChecked>Remember me</Checkbox>
                            </Form.Group>
                            <Button style="primary">Search</Button>
                        </Form>
                    </Card>
                    <h3>Form horizontal</h3>
                    <Card block>
                        <Form type="horizontal">
                            <Form.Group>
                                <Col col="2" className="text-right">
                                    <Form.Control.Label>Email:</Form.Control.Label>
                                </Col>
                                <Col col="10">
                                    <Input type="text" placeholder="Email"/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Col col="2" className="text-right">
                                    <Form.Control.Label>name:</Form.Control.Label>
                                </Col>
                                <Col col="10">
                                    <Input type="password"/>
                                </Col>
                            </Form.Group>
                            <Form.Group className="offset-b-lg">
                                <Col col="2" className="text-right">
                                    <Form.Control.Label>Radios:</Form.Control.Label>
                                </Col>
                                <Col col="10">
                                    <RadioGroup direction="column">
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    </RadioGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Col col="2" offset="2">
                                    <Button style="primary">Sign in</Button>
                                </Col>
                                <Col col="2">
                                    <Button style="default">Cancel</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card>
                    <h3 className="text-secondary">Form API</h3>
                    <CommenTable
                        data = {[
                            ['type', '排列方向，可选值为 inline、horizontal', 'string', 'inline'],
                            ['grid', '是否分列', 'boolean', 'false'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h3 className="text-secondary">Form.Group API</h3>
                    <CommenTable
                        data = {[
                            ['col', '设置所占比例', 'string、number', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

FormView.title = 'Form';
