import React, { Component } from 'react';
import { Card, Row, Col, Button, Notification } from '../components';

export default class NotificationView extends Component{
    //添加一条
    addInfoNotice(){
        Notification.info({
            closeable: false,
            title: "通知",
            message: "欢迎，这是一个Info通知。"
        });
    }
    addSuccessNotice(){
        Notification.success({
            title: "成功",
            message: "恭喜您，操作成功！"
        });
    }
    addWarningNotice(){
        Notification.warning({
            title: "警告",
            message: "请注意，前方有狗熊！"
        });
    }
    addErrorNotice(){
        Notification.error({
            title: "错误",
            message: "很遗憾，您的小四轮爆胎了！"
        });
    }
    render(){
        return (
            <div>
                <h3>Example</h3>
                <Card block>
                    <Row>
                        <Col col="2">
                            <Button style="default" onClick={this.addInfoNotice}>
                                <span className="text-primary">信息</span>
                            </Button>
                        </Col>
                        <Col col="2">
                            <Button style="default" onClick={this.addSuccessNotice}>
                                <span className="text-success">成功</span>
                            </Button>
                        </Col>
                        <Col col="2">
                            <Button style="default" onClick={this.addWarningNotice}>
                                <span className="text-warning">警告</span>
                            </Button>
                        </Col>
                        <Col col="2">
                           <Button style="default" onClick={this.addErrorNotice}>
                                <span className="text-danger">错误</span>
                           </Button>
                        </Col>
                    </Row>
                </Card>
                <Notification/>
            </div>
        );
    }
}