import React, { Component } from 'react';
import { Row, Col, Card, Checkbox, CheckboxGroup, Form,Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class CheckboxView extends Component{
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
                                        <label>interest:</label>
                                        <CheckboxGroup defaultValue={['basketball', 'football']}>
                                            <Checkbox>basketball</Checkbox>
                                            <Checkbox>football</Checkbox>
                                            <Checkbox>volleyball</Checkbox>
                                            <Checkbox>ping-pong</Checkbox>
                                        </CheckboxGroup>
                                    </Form.Group>
                                </Form>
                            </Card.Block>
                            <Highlight>
                                {`import { Checkbox, CheckboxGroup } from 'impression-react';\n\n<CheckboxGroup defaultValue={['basketball', ...]}><Checkbox>basketball</Checkbox>...</CheckboxGroup>`}
                            </Highlight>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Block>
                                    <Form type="inline">
                                        <Form.Group>
                                            <label>disabled:</label>
                                            <CheckboxGroup defaultValue={['basketball', 'football']} disabled>
                                                <Checkbox>basketball</Checkbox>
                                                <Checkbox>football</Checkbox>
                                                <Checkbox>volleyball</Checkbox>
                                                <Checkbox>ping-pong</Checkbox>
                                            </CheckboxGroup>
                                        </Form.Group>
                                    </Form>
                                </Card.Block>
                                <Highlight>
                                    {`<CheckboxGroup defaultValue={['basketball', ...]} disabled> ...</CheckboxGroup>`}
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
