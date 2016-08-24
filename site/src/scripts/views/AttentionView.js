import React, { Component } from 'react';
import { Card, Row, Col, Attention, Breadcrumb } from '../components/impression';
import { CommenTable } from '../components';

export default class AttentionView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Attention style="success">
                                    <strong>Well done!</strong> You successfully read this important attention message.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Attention style="primary">
                                    <strong>Heads up!</strong> This attention needs your attention, but it's not super important.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Attention style="warning">
                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col col="12">
                                <Attention style="danger">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </Attention>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Link color</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Attention style="success">
                                    You successfully read this important attention message
                                    <Attention.Link href="#"> click here</Attention.Link>.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Attention style="primary">
                                    This attention needs your attention, but it's not super important
                                    <Attention.Link href="#"> click here</Attention.Link>.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Attention style="warning">
                                    Better check yourself, you're not looking too good
                                    <Attention.Link href="#"> click here</Attention.Link>.
                                </Attention>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Attention style="danger">
                                    Change a few things up and try submitting again
                                    <Attention.Link href="#"> click here</Attention.Link>.
                                </Attention>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Dismissible</h3>
                    <Card block>
                        <Attention style="success" closeable>
                            You successfully read this important attention message
                            <Attention.Link href="#"> click here</Attention.Link>.
                        </Attention>
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

AttentionView.title = 'Attention';
