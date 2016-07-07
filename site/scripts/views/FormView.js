import React, { Component } from 'react';
import { Card, Checkbox, Radio, RadioGroup, Form, Button, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Form inline</h3>
                    <Card block>
                        <Form>
                            <Form.Group>
                                <label>Name:</label>
                                <Form.Control>
                                    <input type="text" placeholder="Jane Doe"/>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <label>Email</label>
                                <Form.Control>
                                    <input type="email" placeholder="jane.doe@example.com"/>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Checkbox defaultChecked>Remember me</Checkbox>
                            </Form.Group>
                            <Button style="primary">Send</Button>
                        </Form>
                    </Card>
                    <h3>Form horizontal</h3>
                    <Card block>
                        <Form type="horizontal">
                            <Form.Group>
                                <label className="col-sm-2 form-control-label text-right">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="col-sm-2 form-control-label text-right">name:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="col-sm-2 text-right">Radios:</label>
                                <div className="col-sm-10">
                                    <RadioGroup direction="column">
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                        <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    </RadioGroup>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <div className="offset-sm-2 col-sm-2">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                    <h3 className="text-secondary">Form API</h3>
                    <CommenTable
                        data = {[
                            ['type', '排列方向，可选值为 inline、horizontal', 'string', 'inline'],
                            ['grid', '是否分列', 'boolean', 'false'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h3 className="text-secondary">Form.Group API</h3>
                    <CommenTable
                        data = {[
                            ['col', '设置所占比例', 'string、number', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

FormView.title = 'Form';