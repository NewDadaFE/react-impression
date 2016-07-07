import React, { Component } from 'react';
import { Card, Row, Col, ListGroup, Tag, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class ListGroupView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <h5>Normal</h5>
                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item active>Lorem ipsum dolor.</ListGroup.Item>
                                    <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
                                    <ListGroup.Item disabled>Lorem ipsum.</ListGroup.Item>
                                    <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <h5>Tags</h5>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Tag style="default" className="pull-right" shape="pill">1</Tag>
                                        lorem
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Tag style="warning" className="pull-right" shape="pill">2</Tag>
                                        Dapibus ac facilisis in
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Tag style="danger" className="pull-right" shape="pill">3</Tag>
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Tag style="success" className="pull-right" shape="pill">4</Tag>
                                        Porta ac consectetur ac
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Tag style="primary" className="pull-right" shape="pill">5</Tag>
                                        Vestibulum at eros
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <h5>Link</h5>
                                <ListGroup>
                                    <ListGroup.Item href="javascript:void(0)">Lorem ipsum dolor.</ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)">Lorem ipsum dolor sit.</ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)" active>Lorem ipsum dolor sit amet.</ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)">Lorem ipsum dolor.</ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)">Lorem ipsum.</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Custom content</h3>
                    <Card block>
                        <Row>
                            <Col col="6">
                                <ListGroup>
                                    <ListGroup.Item href="javascript:void(0)">
                                        <h5>List group item heading</h5>
                                        <div>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)">
                                        <h5>List group item heading</h5>
                                        <div>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)" active>
                                        <h5>List group item heading</h5>
                                        <div>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item href="javascript:void(0)" disabled>
                                        <h5>List group item heading</h5>
                                        <div>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">ListGroup API</h3>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h3 className="text-secondary">ListGroup.item API</h3>
                    <CommenTable
                        data = {[
                            ['href', '设置链接', 'string', ''],
                            ['disabled', '是否可点击', 'boolean', ''],
                            ['active', '是否处于选中状态', 'boolean', ''],
                            ['header', '头部信息内容', 'string', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

ListGroupView.title = 'ListGroup';