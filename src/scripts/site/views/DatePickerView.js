import React, { Component } from 'react';
import { Card, DatePicker } from '../../components';

export default class DatePickerView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <DatePicker/>
                </Card>
            </div>
        );
    }
}