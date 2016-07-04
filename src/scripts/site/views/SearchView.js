import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Breadcrumb, Modal, Button, Icon } from '../../components';

export default class SearchView extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
            city: ''
        };

        this.toggleModalHandle = this.toggleModalHandle.bind(this);
    }
    toggleModalHandle(){
        let { show } = this.state;
        this.setState({
            show: !show
        });
    }
    selectCityHandle(city){
        this.setState({
            show: false,
            city
        });
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Basic</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>basic:</label>
                                        <Input type="search" onClick={this.toggleModalHandle} value={this.state.city}/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>disabled:</label>
                                        <Input type="search" value="上海" disabled/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Custom addon</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>location:</label>
                                        <Input type="search" onClick={this.toggleModalHandle} value={this.state.city}>
                                            <Icon type="map-marker"></Icon>
                                        </Input>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>crosshairs:</label>
                                        <Input type="search" onClick={this.toggleModalHandle} value={this.state.city}>
                                            <Icon type="crosshairs"></Icon>
                                        </Input>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>使用注意事项</h3>
                    <ul>
                        <li>Input 配合 Modal 实现模态框选择内容，适用于选择项较多的应用场景。</li>
                    </ul>
                </Card>
                { this.state.show &&
                    <Modal size={this.state.size}>
                        <Modal.Header>
                            <Button close onClick={this.toggleModalHandle}>&times;</Button>
                            <h5 className="no-margin">Modal title</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <p>华东：</p>
                            <p>
                                <a onClick={this.selectCityHandle.bind(this, '上海')} href="javascript:void(0)" className="fa-left text-muted">上海</a>
                                <a onClick={this.selectCityHandle.bind(this, '苏州')} href="javascript:void(0)" className="fa-left text-muted">苏州</a>
                                <a onClick={this.selectCityHandle.bind(this, '杭州')} href="javascript:void(0)" className="fa-left text-muted">杭州</a>
                                <a onClick={this.selectCityHandle.bind(this, '嘉兴')} href="javascript:void(0)" className="fa-left text-muted">嘉兴</a>
                                <a onClick={this.selectCityHandle.bind(this, '绍兴')} href="javascript:void(0)" className="fa-left text-muted">绍兴</a>
                                <a onClick={this.selectCityHandle.bind(this, '南京')} href="javascript:void(0)" className="fa-left text-muted">南京</a>
                            </p>
                            <p>华南：</p>
                            <p>
                                <a onClick={this.selectCityHandle.bind(this, '广州')} href="javascript:void(0)" className="fa-left text-muted">广州</a>
                                <a onClick={this.selectCityHandle.bind(this, '深圳')} href="javascript:void(0)" className="fa-left text-muted">深圳</a>
                                <a onClick={this.selectCityHandle.bind(this, '东莞')} href="javascript:void(0)" className="fa-left text-muted">东莞</a>
                                <a onClick={this.selectCityHandle.bind(this, '佛山')} href="javascript:void(0)" className="fa-left text-muted">佛山</a>
                                <a onClick={this.selectCityHandle.bind(this, '厦门')} href="javascript:void(0)" className="fa-left text-muted">厦门</a>
                                <a onClick={this.selectCityHandle.bind(this, '福州')} href="javascript:void(0)" className="fa-left text-muted">福州</a>
                                <a onClick={this.selectCityHandle.bind(this, '南昌')} href="javascript:void(0)" className="fa-left text-muted">南昌</a>
                                <a onClick={this.selectCityHandle.bind(this, '赣州')} href="javascript:void(0)" className="fa-left text-muted">赣州</a>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button style="default" onClick={this.toggleModalHandle}>Close</Button>
                            <Button style="primary">Save</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        );
    }
}

SearchView.title = 'Search';