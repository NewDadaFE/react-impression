import React, { Component } from 'react';
import { Card, Row, Col, Badge, Breadcrumb, Icon } from '../../components';

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
                </Card>
            </div>
        );
    }
}

BadgeView.title = 'Badge';