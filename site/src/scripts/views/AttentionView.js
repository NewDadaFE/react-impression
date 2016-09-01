import React, { Component } from 'react';
import { Card, Row, Col, Attention, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class AttentionView extends Component{
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
                                    <Attention theme="success">
                                        <strong>Well done!</strong> You successfully read this important attention message.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Attention theme="primary">
                                        <strong>Heads up!</strong> This attention needs your attention, but it's not super important.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Attention theme="warning">
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col col="12">
                                    <Attention theme="danger">
                                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                    </Attention>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Attention } from 'impression-react';\n\n<Attention theme="success"><strong>Well done!</strong>...</Attention>\n<Attention theme="primary"><strong>Heads up!</strong>...</Attention>\n<Attention theme="warning"><strong>Warning!</strong>...</Attention>\n<Attention theme="danger" ><strong>Oh snap!</strong>...</Attention>`}
                        </Highlight>
                    </Card>
                    <h3>Link color</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Attention theme="success">
                                        You successfully read this important attention message
                                        <Attention.Link href="#"> click here</Attention.Link>.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Attention theme="primary">
                                        This attention needs your attention, but it's not super important
                                        <Attention.Link href="#"> click here</Attention.Link>.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Attention theme="warning">
                                        Better check yourself, you're not looking too good
                                        <Attention.Link href="#"> click here</Attention.Link>.
                                    </Attention>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Attention theme="danger">
                                        Change a few things up and try submitting again
                                        <Attention.Link href="#"> click here</Attention.Link>.
                                    </Attention>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Attention theme="success">... <Attention.Link href="#"> click here</Attention.Link>.<Attention>\n<Attention theme="primary">... <Attention.Link href="#"> click here</Attention.Link>.<Attention>\n<Attention theme="warning">... <Attention.Link href="#"> click here</Attention.Link>.<Attention>\n<Attention theme="danger">... <Attention.Link href="#"> click here</Attention.Link>.<Attention>`}
                        </Highlight>
                    </Card>
                    <h3>Dismissible</h3>
                    <Card>
                        <Card.Block>
                            <Attention theme="success" closeable>
                                You successfully read this important attention message
                                <Attention.Link href="#"> click here</Attention.Link>.
                            </Attention>
                        </Card.Block>
                        <Highlight>
                            {` <Attention theme="success" closeable>...</Attention>`}
                        </Highlight>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['theme', '设置警告提示样式，可选值为 success、primary、warning、danger', 'string', ''],
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
