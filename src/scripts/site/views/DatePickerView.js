import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Button } from '../../components';

export default class DatePickerView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>时间:</label>
                                    <Input type="date"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>默认时间:</label>
                                    <Input type="date" defaultValue="2016-05-29"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>不可选:</label>
                                    <Input type="date" defaultValue="2016-05-29" disabled/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card>
                <h3>时间限制</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>最小时间:</label>
                                    <Input type="date" defaultValue="2016-05-29" minDate="2016-05-15"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>最大时间:</label>
                                    <Input type="date" defaultValue="2016-05-29" maxDate="2016-05-31"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>第一天:</label>
                                    <Input type="date" defaultValue="2016-05-29" firstDayOfWeek="一"/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card>
                <h3>时间格式</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>Y-M-D:</label>
                                    <Input type="date" defaultValue="2016-5-29" format="Y-M-D"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>YYYY/MM/DD:</label>
                                    <Input type="date" defaultValue="2016/05/29" format="YYYY/MM/DD"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col col="4">
                            <Form>
                                <Form.Group>
                                    <label>年月日:</label>
                                    <Input type="date" defaultValue="2016年05月29日" format="YYYY年MM月DD日"/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}