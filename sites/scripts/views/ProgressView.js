import React, { Component } from 'react';
import { Card, Row, Col, Progress, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class ProgressView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Progress value="1"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="25"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="75"/>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Theme</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Progress value="50"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="success"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="warning"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="danger"/>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Striped</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Progress value="50" striped/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="success" striped/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="warning" striped/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Progress value="50" style="danger" striped/>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['style', '设置进度条样式，可选值为 success、warning、danger', 'string', ''],
                            ['striped', '是否为斑马线样式', 'boolean', 'false'],
                            ['value', '进度值，必填', 'string、number', ''],
                            ['max', '设置最大值', 'string、number', '100'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

ProgressView.title = 'Progress';