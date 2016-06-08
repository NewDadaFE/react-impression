import React, { Component } from 'react';
import { Card, Row, Col, Button, Message, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class MessageView extends Component{
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
    showLoadingMessageHandle(){
        Message.loading('正在执行中...');
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Example</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Button style="default" onClick={this.showInfoMessageHandle}>
                                    <span className="text-primary">信息</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={this.showSuccessMessageHandle}>
                                    <span className="text-success">成功</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={this.showWarningMessageHandle}>
                                    <span className="text-warning">警告</span>
                                </Button>
                            </Col>
                            <Col>
                               <Button style="default" onClick={this.showErrorMessageHandle}>
                                    <span className="text-danger">错误</span>
                               </Button>
                            </Col>
                            <Col>
                               <Button style="default" onClick={this.showLoadingMessageHandle}>
                                    <i className="fa fa-spinner fa-left"></i>Loading
                               </Button>
                            </Col>
                        </Row>
                    </Card>
                    <Message/>
                    <h3>API</h3>
                    <ul>
                        <li><code>Message.info(content)</code></li>
                        <li><code>Message.success(content)</code></li>
                        <li><code>Message.warning(content)</code></li>
                        <li><code>Message.error(content)</code></li>
                        <li><code>Message.loading(content)</code></li>
                    </ul>
                    <CommenTable
                        data = {[
                            ['content', '提示内容', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

MessageView.title = 'Message';