import React, { Component } from 'react';
import { Row, Col, Card, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Form, Button } from '../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <h3>Checkbox</h3>
                <Row>
                    <Col col="6">
                        <Card block>
                            <Form type="inline">
                                <Form.Group>
                                    <label>interest:</label>
                                    <CheckboxGroup value={['basketball', 'football']}>
                                        <Checkbox>basketball</Checkbox>
                                        <Checkbox>football</Checkbox>
                                        <Checkbox>volleyball</Checkbox>
                                        <Checkbox>ping-pong</Checkbox>
                                    </CheckboxGroup>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col col="6">
                        <Card block>
                            <Form type="inline">
                                <Form.Group>
                                    <label>disabled:</label>
                                    <CheckboxGroup value={['basketball', 'football']} disabled>
                                        <Checkbox>basketball</Checkbox>
                                        <Checkbox>football</Checkbox>
                                        <Checkbox>volleyball</Checkbox>
                                        <Checkbox>ping-pong</Checkbox>
                                    </CheckboxGroup>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <h3>Radio</h3>
                <Row>
                    <Col col="6">
                        <Card block>
                            <Form>
                                <Form.Group>
                                    <label>Gender</label>
                                    <RadioGroup value="1">
                                        <Radio value="1">Male</Radio>
                                        <Radio value="0">Female</Radio>
                                    </RadioGroup>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col col="6">
                        <Card block>
                            <Form>
                                <Form.Group>
                                    <label>Disabled</label>
                                    <RadioGroup disabled>
                                        <Radio defaultChecked>Yes</Radio>
                                        <Radio>No</Radio>
                                    </RadioGroup>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <h3>Switch</h3>
                <Card block>
                    <Form grid>
                        <Form.Group col="6">
                            <label>Mute</label>
                            <Switch defaultChecked/>
                        </Form.Group>
                        <Form.Group>
                            <label>Disabled</label>
                            <Switch disabled defaultChecked />
                        </Form.Group>
                    </Form>
                </Card>
                <h3>Form inline</h3>
                <Card block>
                    <Form>
                        <Form.Group>
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Jane Doe"/>
                        </Form.Group>
                        <Form.Group>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="jane.doe@example.com"/>
                        </Form.Group>
                        <Form.Group>
                            <Checkbox checked>Remember me</Checkbox>
                        </Form.Group>
                        <Button style="primary">Send</Button>
                    </Form>
                </Card>
                <h3>Form horizontal</h3>
                <Card block>
                    <Form type="horizontal">
                        <Form.Group>
                            <label className="col-sm-2 form-control-label text-xs-right">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="col-sm-2 form-control-label text-xs-right">name:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="col-sm-2 text-xs-right">Radios:</label>
                            <div className="col-sm-10">
                                <RadioGroup direction="column">
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                </RadioGroup>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <div className="offset-sm-2 col-sm-2">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        );
    }
}