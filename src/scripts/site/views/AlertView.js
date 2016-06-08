import React, { Component } from 'react';
import { Card, Row, Col, Alert, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class AlertView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Alert style="success">
                                    <strong>Well done!</strong> You successfully read this important alert message.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert style="primary">
                                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert style="warning">
                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col col="12">
                                <Alert style="danger">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </Alert>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Link color</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Alert style="success">
                                  You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert style="primary">
                                  This alert needs your attention, but it's not super important<a href="#" className="alert-link"> click here</a>.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert style="warning">
                                  Better check yourself, you're not looking too good<a href="#" className="alert-link"> click here</a>.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert style="danger">
                                  Change a few things up and try submitting again<a href="#" className="alert-link"> click here</a>.
                                </Alert>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Dismissible</h3>
                    <Card block>
                        <Alert style="success" closeable>
                          You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                        </Alert>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['style', '设置警告提示样式，可选值为 success、primary、warning、danger', 'string', ''],
                            ['closeable', '设置是否显示关闭按钮', 'boolean', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

AlertView.title = 'Alert';