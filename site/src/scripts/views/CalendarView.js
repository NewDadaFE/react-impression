import React, { Component } from 'react';
import { Card, Row, Col, Calendar, Breadcrumb, Badge, Icon, Image } from '../components/impression';
import { Highlight } from '../components/';

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
        if(!date.inMonth){
            return false;
        }

        switch(date.day){
        case 1:
        case 2:
        case 3:
            return (
                <div>
                    <div><Badge type="legend" theme="success">{date.day}</Badge></div>
                    <div><Badge type="legend" theme="warning">{date.day}</Badge></div>
                    <div><Badge type="legend" theme="danger">{date.day}</Badge></div>
                </div>
            );
        case 5:
        case 14:
        case 23:
        case 27:
            return <div className="text-center"><Image circle src="images/user.jpg" style={{width: '70px'}}/></div>;
        case 11:
        case 12:
        case 13:
            return (
                <div>
                    <div><Badge type="legend" theme="success">{date.day}</Badge></div>
                    <div>自定义内容1</div>
                    <div>自定义内容2</div>
                    <div>自定义内容3</div>
                    <div>自定义内容4</div>
                </div>
            );
        case 21:
        case 22:
            return <Badge type="legend" theme="danger">{date.day}</Badge>;
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
                    <Card>
                        <Card.Block>
                            <Calendar></Calendar>
                        </Card.Block>
                        <Highlight>
                            {`import { Calendar } from 'impression-react';\n\n<Calendar></Calendar>`}
                        </Highlight>
                    </Card>
                    <h3>Small</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Calendar size="sm"></Calendar>
                                </Col>
                                <Col>
                                    <Calendar onDateCellClick={this.checkDateClickHandle} dateCellRender={this.checkDateCellRender} firstDayOfWeek={0} size="sm"></Calendar>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Calendar size="sm"></Calendar>\n<Calendar firstDayOfWeek={0} size="sm"></Calendar>`}
                        </Highlight>
                    </Card>
                    <h3>Custom date cell content</h3>
                    <Card>
                        <Card.Block>
                            <Calendar dateCellRender={this.customDateCellRender}></Calendar>
                        </Card.Block>
                        <Highlight>
                            {`<Calendar dateCellRender={...}></Calendar>`}
                        </Highlight>
                    </Card>
                </Card>
            </div>
        );
    }
}

CalendarView.title = 'Calendar';
