import React, { Component } from 'react';
import { Card, Row, Col, Loading } from '../../components';

export default class SwitchView extends Component{
    render(){
        return (
            <div>
                <h3>Loading</h3>
                <Card block className="bg-inverse">
                    <Row>
                        <Col col="3">
                            <Loading type="fountain"/>
                        </Col>
                        <Col col="3">
                            <Loading type="wave"/>
                        </Col>
                        <Col col="3">
                            <Loading type="pendule"/>
                        </Col>
                        <Col col="3">
                            <Loading type="cyclone"/>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}