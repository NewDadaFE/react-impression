import React, { Component } from 'react';
import { Card, Row, Col, Progress, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class ProgressView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes.slice(1)}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card>
                        <Card.Block>
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
                        </Card.Block>
                        <Highlight>
                            {`import { Progress } from 'impression-react';\n\n<Progress value="1"/>\n<Progress value="25"/>\n<Progress value="50"/>\n<Progress value="75"/>`}
                        </Highlight>
                    </Card>
                    <h3>Theme</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Progress value="50"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="success"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="warning"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="danger"/>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Progress value="50"/>\n<Progress value="50" theme="success"/>\n<Progress value="50" theme="warning"/>\n<Progress value="50" theme="danger"/>`}
                        </Highlight>
                    </Card>
                    <h3>Striped</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Progress value="50" striped/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="success" striped/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="warning" striped/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Progress value="50" theme="danger" striped/>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Progress value="50" striped/>\n<Progress value="50" theme="success" striped/>\n<Progress value="50" theme="warning" striped/>\n<Progress value="50" theme="danger" striped/>`}
                        </Highlight>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['theme', '设置进度条样式，可选值为 success、warning、danger', 'string', ''],
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
