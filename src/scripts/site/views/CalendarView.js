import React, { Component } from 'react';
import { Card, Row, Col, Calendar, Breadcrumb, Badge } from '../../components';

export default class CalendarView extends Component{
    dateCellRender(date){
        switch(date.day){
        case 1:
        case 2:
        case 3:
            return <Badge type="legend" style="success">{date.day}</Badge>;
        case 21:
        case 22:
        case 23:
            return <Badge type="legend" style="danger">{date.day}</Badge>;
        }
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Basic</h3>
                    <Card block>
                        <Calendar></Calendar>
                    </Card>
                    <h3>Size</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Calendar size="sm"></Calendar>
                            </Col>
                            <Col>
                                <Calendar firstDayOfWeek={0} weekdays={['星期日','星期一','星期二','星期三','星期四','星期五','星期六']} size="sm"></Calendar>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Custom</h3>
                    <Card block>
                        <Calendar dateCellRender={this.dateCellRender}></Calendar>
                    </Card>
                </Card>
            </div>
        );
    }
}