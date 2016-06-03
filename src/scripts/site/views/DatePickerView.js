import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class DatePickerView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>时间:</label>
                                        <Input type="date"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>默认时间:</label>
                                        <Input type="date" defaultValue="2016-05-29"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>不可选:</label>
                                        <Input type="date" defaultValue="2016-05-29" disabled/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>时间限制</h3>
                    <Card block>
                        <Row>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>最小时间:</label>
                                        <Input type="date" defaultValue="2016-05-29" minDate="2016-05-15"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>最大时间:</label>
                                        <Input type="date" defaultValue="2016-05-29" maxDate="2016-05-31"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>第一天:</label>
                                        <Input type="date" defaultValue="2016-05-29" firstDayOfWeek="一"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>时间格式</h3>
                    <Card block>
                        <Row>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>Y-M-D:</label>
                                        <Input type="date" defaultValue="2016-5-29" format="Y-M-D"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>YYYY/MM/DD:</label>
                                        <Input type="date" defaultValue="2016/05/29" format="YYYY/MM/DD"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col col="4">
                                <Form>
                                    <Form.Group>
                                        <label>年月日:</label>
                                        <Input type="date" defaultValue="2016年05月29日" format="YYYY年MM月DD日"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Input[type='date'] API</h3>
                    <CommenTable
                        data = {[
                            ['value', '日期', 'string', ''],
                            ['format', '格式', 'string', 'yyyy-MM-dd'],
                            ['weekdays', '星期', 'array', "['日', '一', '二', '三', '四', '五', '六']"],
                            ['months', '月份', 'array', "['1月','2月',...,'12月']"],
                            ['showToday', '是否显示今天', 'boolean', 'true'],
                            ['todayText', '今天', 'string', '今天'],
                            ['firstDayOfWeek', '星期第一天', 'string', '日'],
                            ['minDate', '最小日期', 'string', ''],
                            ['maxDate', '最大日期', 'string', ''],
                            ['yearScope', '年份前后默认范围', 'string or number', '5'],
                            ['onSelect', '选中时间', 'function', ''],
                            ['onChange', '修改选中时间', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

DatePickerView.title = 'DatePicker';