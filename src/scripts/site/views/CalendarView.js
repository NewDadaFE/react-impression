import React, { Component } from 'react';
import { Card, Row, Col, Calendar, Breadcrumb, Badge, Icon } from '../../components';

export default class CalendarView extends Component{
    constructor(prop, context){
        super(prop, context);

        this.state = {
            days: [5, 6, 7, 8, 9, 10]
        };

        this.checkDateCellRender = this.checkDateCellRender.bind(this);
        this.checkDateClickHandle = this.checkDateClickHandle.bind(this);
    }
    customDateCellRender(date){
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
    checkDateCellRender(date){
        if(!date.inMonth){
            return false;
        }

        if(this.state.days.indexOf(date.day) !== -1){
            return <div className="text-success text-center"><Icon type="check"></Icon></div>;
        }
    }
    checkDateClickHandle(date){
        let { days } = this.state;
        if(!date.inMonth){
            return false;
        }

        //选中
        if(days.indexOf(date.day) === -1){
            this.setState({
                days: [...days, date.day]
            });
        }else{//去除选中
            this.setState({
                days: days.filter(day => {
                    return day !== date.day;
                })
            });
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
                                <Calendar onDateCellClick={this.checkDateClickHandle} dateCellRender={this.checkDateCellRender} size="sm"></Calendar>
                            </Col>
                            <Col>
                                <Calendar firstDayOfWeek={0} size="sm"></Calendar>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Custom date cell content</h3>
                    <Card block>
                        <Calendar dateCellRender={this.customDateCellRender}></Calendar>
                    </Card>
                </Card>
            </div>
        );
    }
}