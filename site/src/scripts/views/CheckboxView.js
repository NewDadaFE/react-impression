import React, { Component } from 'react';
import { Row, Col, Card, Checkbox, CheckboxGroup, Form,Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class CheckboxView extends Component{
    //获取checkbox是否选中
    checkboxChangeHandle = value => {
        // console.log(Checkbox.getValue(this.refs.checkbox));
    }
    //获取checkboxGroup是否选中
    checkboxGroupChangeHandle = value => {
        // console.log(value);
        // console.log(CheckboxGroup.getValue(this.refs.checkboxs));
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Checkbox</h5>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Block>
                                <Form type="inline">
                                    <Form.Group>
                                        <label>defaultChecked:</label>
                                        <Checkbox ref="checkbox" defaultChecked onChange={this.checkboxChangeHandle}>remember me</Checkbox>
                                    </Form.Group>
                                </Form>
                            </Card.Block>
                            <Highlight>
                                {`import { Checkbox } from 'impression-react';\n\n<Checkbox defaultChecked>remember me</Checkbox>`}
                            </Highlight>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <Card.Block>
                                <Form type="inline">
                                    <Form.Group>
                                        <label>disabled:</label>
                                        <Checkbox disabled>remember me</Checkbox>
                                    </Form.Group>
                                </Form>
                            </Card.Block>
                            <Highlight>
                                {`<Checkbox disabled>remember me</Checkbox>`}
                            </Highlight>
                            </Card>
                        </Col>
                    </Row>
                    <h5>CheckboxGroup</h5>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Block>
                                <Form type="inline">
                                    <Form.Group>
                                        <label>defaultValue:</label>
                                        <CheckboxGroup defaultValue={['basketball', 'football']}>
                                            <Checkbox>basketball</Checkbox>
                                            <Checkbox>football</Checkbox>
                                            <Checkbox>volleyball</Checkbox>
                                        </CheckboxGroup>
                                    </Form.Group>
                                </Form>
                            </Card.Block>
                            <Highlight>
                                {`import { CheckboxGroup, Checkbox } from 'impression-react';\n\n<CheckboxGroup defaultValue={['basketball', football]}>\n  <Checkbox>basketball</Checkbox>\n  ...\n</CheckboxGroup>`}
                            </Highlight>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <Card.Block>
                                <Form type="inline">
                                    <Form.Group>
                                        <label>value:</label>
                                        <CheckboxGroup ref="checkboxs" onChange={this.checkboxGroupChangeHandle} value={['basketball', 'football']}>
                                            <Checkbox>basketball</Checkbox>
                                            <Checkbox>football</Checkbox>
                                            <Checkbox>volleyball</Checkbox>
                                        </CheckboxGroup>
                                    </Form.Group>
                                </Form>
                            </Card.Block>
                            <Highlight>
                                {`<CheckboxGroup value={['basketball', football]}>\n  <Checkbox>basketball</Checkbox>\n  ...\n</CheckboxGroup>`}
                            </Highlight>
                            </Card>
                        </Col>
                    </Row>
                    <h5 className="text-secondary">Checkbox API</h5>
                    <CommenTable
                        data = {[
                            ['disabled', '设置是否可以点击', 'boolean', 'false'],
                            ['defaultChecked', '设置是否默认选中', 'boolean', ''],
                            ['checked', '设置是否选中', 'boolean', ''],
                            ['onChange', '状态变更回调函数', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h5 className="text-secondary">CheckboxGroup API</h5>
                    <CommenTable
                        data = {[
                            ['vlaue', '设置默认是否选中', 'any', ''],
                            ['onChange', '状态变化回调函数', 'function', ''],
                            ['disabled', '是否可以点击', 'boolean', 'false'],
                            ['direction', '排列方向，可选值为 row、column', 'string', 'row'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

CheckboxView.title = 'Checkbox';
