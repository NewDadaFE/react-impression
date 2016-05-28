import React, { Component } from 'react';
import { Card, Form, Input, Button } from '../../components';

export default class DatePickerView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Form>
                        <Form.Group>
                            <label>Name:</label>
                            <Input defaultValue="2016-05-29"/>
                        </Form.Group>
                        <Form.Group>
                            <label>Name:</label>
                            <input type="date"/>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        );
    }
}