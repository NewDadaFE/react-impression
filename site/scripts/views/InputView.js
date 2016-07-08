import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Breadcrumb, Modal, Button, Icon, InlineSelect } from '../components/base';

export default class InputView extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
            city: {
                name: '上海',
                id: '1'
            }
        };

        this.toggleModalHandle = this.toggleModalHandle.bind(this);
        this.selectCityHandle = this.selectCityHandle.bind(this);
        this.clearInputHandle = this.clearInputHandle.bind(this);
    }
    /**
     * 显示/隐藏弹出层.
     */
    toggleModalHandle(){
        let { show } = this.state;
        this.setState({
            show: !show
        });
    }
    /**
     * 选择城市.
     * @param  {[String]} id   [值]
     * @param  {[String]} name [名称]
     */
    selectCityHandle(id, name){
        this.setState({
            show: false,
            city: {
                name,
                id
            }
        });
    }
    /**
     * 清空Input.
     */
    clearInputHandle(){
        this.refs.clearInput.refs.main.value = '';
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Text</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>basic:</label>
                                        <Input type="text"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>addon:</label>
                                        <Input type="text" ref="clearInput" defaultValue="text">
                                            <Icon type="times" onClick={this.clearInputHandle}></Icon>
                                        </Input>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>pill shape:</label>
                                        <Input type="text" defaultValue="something" pill>
                                            <Icon type="search"></Icon>
                                        </Input>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                     <h3>Date</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>basic:</label>
                                        <Input type="date"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>defaultValue:</label>
                                        <Input type="date" defaultValue="2016-05-29"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>disabled:</label>
                                        <Input type="date" defaultValue="2016-05-29" disabled/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Search</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>basic:</label>
                                        <Input type="search" onClick={this.toggleModalHandle} value={this.state.city.name}/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group>
                                        <label>addon:</label>
                                        <Input type="search" onClick={this.toggleModalHandle} value={this.state.city.name}>
                                            <Icon type="map-marker"></Icon>
                                        </Input>
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
                    <h3>注意:</h3>
                    <ul>
                        <li>Input 配合 Modal 实现模态框选择内容，适用于选择项较多的应用场景。</li>
                    </ul>
                </Card>
                { this.state.show &&
                    <Modal size={this.state.size}>
                        <Modal.Header>
                            <Button close onClick={this.toggleModalHandle}>&times;</Button>
                            <h5 className="no-margin">Search</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col col="2" className="text-right">
                                    <strong>华东：</strong>
                                </Col>
                                <Col col="10">
                                    <InlineSelect value={this.state.city.id} onChange={this.selectCityHandle}>
                                        <InlineSelect.Option value="1">上海</InlineSelect.Option>
                                        <InlineSelect.Option value="2">苏州</InlineSelect.Option>
                                        <InlineSelect.Option value="3">杭州</InlineSelect.Option>
                                        <InlineSelect.Option value="4">嘉兴</InlineSelect.Option>
                                        <InlineSelect.Option value="5">绍兴</InlineSelect.Option>
                                        <InlineSelect.Option value="6">常州</InlineSelect.Option>
                                        <InlineSelect.Option value="7">千岛湖</InlineSelect.Option>
                                        <InlineSelect.Option value="8">昆山</InlineSelect.Option>
                                        <InlineSelect.Option value="9">合肥</InlineSelect.Option>
                                    </InlineSelect>
                                </Col>
                            </Row>
                            <Row>
                                <Col col="2" className="text-right">
                                    <strong>华南：</strong>
                                </Col>
                                <Col col="10">
                                    <InlineSelect value={this.state.city.id} onChange={this.selectCityHandle}>
                                        <InlineSelect.Option value="21">广州</InlineSelect.Option>
                                        <InlineSelect.Option value="22">深圳</InlineSelect.Option>
                                        <InlineSelect.Option value="23">东莞</InlineSelect.Option>
                                        <InlineSelect.Option value="24">佛山</InlineSelect.Option>
                                        <InlineSelect.Option value="25">厦门</InlineSelect.Option>
                                        <InlineSelect.Option value="26">福州</InlineSelect.Option>
                                        <InlineSelect.Option value="27">南昌</InlineSelect.Option>
                                        <InlineSelect.Option value="28">泉州</InlineSelect.Option>
                                        <InlineSelect.Option value="29">赣州</InlineSelect.Option>
                                    </InlineSelect>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button style="default" onClick={this.toggleModalHandle}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        );
    }
}

InputView.title = 'Input';