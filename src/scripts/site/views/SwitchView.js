import React, { Component } from 'react';
import { Row, Col, Card, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Form, Button } from '../../components';
import { CommenTable } from '../components';

export default class SwitchView extends Component{
    render(){
        return (
            <div>
                <h3>Switch</h3>
                <Card block>
                    <Form grid>
                        <Form.Group col="6">
                            <label>Mute</label>
                            <Switch defaultChecked/>
                        </Form.Group>
                        <Form.Group>
                            <label>Disabled</label>
                            <Switch disabled defaultChecked />
                        </Form.Group>
                    </Form>
                </Card>
                <h3>Switch API</h3>
                <CommenTable
                    data = {[
                        ['defaultChecked', '是否默认选中', 'boolean', ''],
                        ['disabled', '是否可以点击', 'boolean', ''],
                        ['onChange', '状态变更回调函数', 'function', ''],
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}