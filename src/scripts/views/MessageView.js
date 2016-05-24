import React, { Component } from 'react';
import { Card, Row, Col, Button, Message } from '../components';

export default class MessageView extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            show: false
        };

        this.showInfoMessageHandle = this.showInfoMessageHandle.bind(this);
    }
    showInfoMessageHandle(){
        Message.info('你好，这是一条info消息！');
    }
    showSuccessMessageHandle(){
        Message.success('你好，这是一条success消息！');
    }
    showWarningMessageHandle(){
        Message.warning('你好，这是一条warning消息！');
    }
    showErrorMessageHandle(){
        Message.error('你好，这是一条error消息！');
    }
    render(){
        let { show } = this.state;

        return (
            <div>
                <h3>Theme tag</h3>
                <Card block>
                    <Row>
                        <Col col="2">
                            <Button style="default" onClick={this.showInfoMessageHandle}>
                                <span className="text-primary">信息</span>
                            </Button>
                        </Col>
                        <Col col="2">
                            <Button style="default" onClick={this.showSuccessMessageHandle}>
                                <span className="text-success">成功</span>
                            </Button>
                        </Col>
                        <Col col="2">
                            <Button style="default" onClick={this.showWarningMessageHandle}>
                                <span className="text-warning">警告</span>
                            </Button>
                        </Col>
                        <Col col="2">
                           <Button style="default" onClick={this.showErrorMessageHandle}>
                                <span className="text-danger">错误</span>
                           </Button>
                        </Col>
                        <Col col="2">
                           <Button style="default">
                                <i className="fa fa-spinner fa-left"></i>Loading
                           </Button>
                        </Col>
                    </Row>
                </Card>
                <Message/>
            </div>
        );
    }
}