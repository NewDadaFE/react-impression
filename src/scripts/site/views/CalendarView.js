import React, { Component } from 'react';
import { Card, Calendar, Breadcrumb } from '../../components';

export default class CalendarView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Calendar></Calendar>
                    </Card>
                </Card>
            </div>
        );
    }
}