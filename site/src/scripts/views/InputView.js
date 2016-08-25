import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Breadcrumb, Modal, Button, Icon, InlineSelect } from '../components/impression';
import { CommenTable } from '../components';

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
                    <h5>Text</h5>
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
                     <h5>Date</h5>
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
                    <h5>Search</h5>
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
                    <h5>File</h5>
                    <Card block>
                        <Row>
                            <Col>
                                <Input type="file"/>
                            </Col>
                            <Col>
                                <Input type="file" placeholder="请选择要上传的证书图片"/>
                            </Col>
                            <Col>
                                <Input type="file" btnStyle="primary"/>
                            </Col>
                        </Row>
                    </Card>
                    <h5>Input API</h5>
                    <CommenTable
                        data = {[
                            ['type', '设置输入框类型，可选值为text、password、file、date、emaile、mouth、search', 'string', 'text'],
                            ['placeholder', '输入框提示信息', 'string', ''],
                            ['value', '输入框的值', 'any', ''],
                            ['defaultValue', '输入框默认值', 'any', ''],
                            ['clearable', '是否可清除', 'boolean', 'true'],
                            ['pill', '样式是否椭圆形', 'boolean', ''],
                            ['disabled', '是否不可选', 'boolean', 'false'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h5>注意</h5>
                    <ul>
                        <li><textarea value="<Input type='search'/>"></textarea> 配合 Modal 实现模态框选择内容，适用于选择项较多的应用场景。</li>
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
                            <Button theme="default" onClick={this.toggleModalHandle}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        );
    }
}

InputView.title = 'Input';
