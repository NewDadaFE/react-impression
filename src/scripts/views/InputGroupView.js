import React, { Component } from 'react';
import { Card, Row, Col, Button, InputGroup } from '../components';

export default class InputGroupView extends Component{
    render(){
        return (
            <div>
                <h3>Basic examples</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <InputGroup.Input placeholder="something"/>
                            </InputGroup>
                        </Col>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Addon>@</InputGroup.Addon>
                            </InputGroup>
                        </Col>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Addon>@</InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card>
                <h3>Button addons</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Button style="default">help</InputGroup.Button>
                                <InputGroup.Input placeholder="something"/>
                            </InputGroup>
                        </Col>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Button style="primary">Go</InputGroup.Button>
                            </InputGroup>
                        </Col>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Button style="default">-</InputGroup.Button>
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Button style="default">+</InputGroup.Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card>
                <h3>Sizes</h3>
                <Card block>
                    <Row>
                        <Col col="3">
                            <InputGroup size="sm">
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Button style="primary">Search</InputGroup.Button>
                            </InputGroup>
                        </Col>
                        <Col col="4">
                            <InputGroup>
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Button style="primary">Search</InputGroup.Button>
                            </InputGroup>
                        </Col>
                        <Col col="5">
                            <InputGroup size="lg">
                                <InputGroup.Input placeholder="something"/>
                                <InputGroup.Button style="primary">Search</InputGroup.Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}