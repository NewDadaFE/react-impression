import React, { Component } from 'react';
import { Card, Row, Col, Badge, Breadcrumb, Icon } from '../../components';
import { CommenTable } from '../components/';

export default class BadgeView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Badge content="3">
                                    <div className="bg-default" style={{width: '50px', height: '50px'}}>
                                    </div>
                                </Badge>
                                <p className="text-primary">primary</p>
                            </Col>
                            <Col>
                                <Badge content="16" style="secondary">
                                    <div className="bg-default" style={{width: '50px', height: '50px'}}></div>
                                </Badge>
                                <p className="text-secondary">secondary</p>
                            </Col>
                            <Col>
                                <Badge content="25" style="danger">
                                    <div className="bg-default" style={{width: '50px', height: '50px'}}></div>
                                </Badge>
                                <p className="text-danger">danger</p>
                            </Col>
                            <Col>
                                <Badge content="33" style="success">
                                    <div className="bg-default" style={{width: '50px', height: '50px'}}></div>
                                </Badge>
                                <p className="text-success">success</p>
                            </Col>
                            <Col>
                                <Badge content="99+" style="inverse">
                                    <div className="bg-default" style={{width: '50px', height: '50px'}}></div>
                                </Badge>
                                <p>inverse</p>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Dot</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Badge>
                                    <Icon size="lg" type="bell"/>
                                </Badge>
                            </Col>
                            <Col>
                                <Badge style="danger">
                                    <Icon size="lg" type="bell-o"/>
                                </Badge>
                            </Col>
                            <Col>
                                <Badge style="danger">
                                    <Icon size="lg" type="envelope-o"/>
                                </Badge>
                            </Col>
                            <Col>
                                <Badge style="danger">
                                    <Icon size="lg" type="bullhorn"/>
                                </Badge>
                            </Col>
                        </Row>
                    </Card>
                    <h3>legend</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Badge type="legend">primary</Badge>
                            </Col>
                            <Col>
                                <Badge type="legend" style="danger">danger</Badge>
                            </Col>
                            <Col>
                                <Badge type="legend" style="warning">warning</Badge>
                            </Col>
                            <Col>
                                <Badge type="legend" style="success">success</Badge>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">Badge API</h3>
                    <CommenTable
                        data = {[
                            ['content', '内容', 'string', ''],
                            ['style', '样式，可选值为 primary、secondary、danger、success、inverse', 'string', 'primary'],
                            ['type', '类型，可选值为 legend', 'string', ''],
                            ['size', '尺寸，可选值为 lg、sm', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

BadgeView.title = 'Badge';