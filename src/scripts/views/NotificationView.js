import React, { Component, PropTypes } from 'react';
import { Card, Row, Col, Button, Notification } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components';

export default class NotificationView extends Component {
    static propTypes = {
        routes: PropTypes.array,
    }
    // 添加一条
    addInfoNotice() {
        Notification.info({
            closeable: false,
            title: '通知',
            message: '欢迎，这是一个Info通知。',
        });
    }
    addSuccessNotice() {
        Notification.success({
            title: '成功',
            message: '恭喜您，操作成功！',
        });
    }
    addWarningNotice() {
        Notification.warning({
            title: '警告',
            message: '请注意，前方有狗熊！',
        });
    }
    addErrorNotice() {
        Notification.error({
            title: '错误',
            message: '很遗憾，您的小四轮爆胎了！',
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb routes={this.props.routes} />
                <Card block noborder>
                    <h5>Example</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Button theme="default" onClick={this.addInfoNotice}>
                                        <span className="text-primary">信息</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={this.addSuccessNotice}>
                                        <span className="text-success">成功</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={this.addWarningNotice}>
                                        <span className="text-warning">警告</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={this.addErrorNotice}>
                                        <span className="text-danger">错误</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Notification } from 'impression-react';\n\n`}
                            {`Notification.info(title, message, closeable)\n`}
                            {`Notification.success(title, message, closeable)\n`}
                            {`Notification.warning(title, message, closeable)\n`}
                            {'Notification.error(title, message, closeable)'}
                        </Highlight>
                    </Card>
                    <Notification />
                    <h5>Notification API</h5>
                    <ul>
                        <li><code>Notification.info(title, message, closeable)</code></li>
                        <li><code>Notification.success(title, message, closeable)</code></li>
                        <li><code>Notification.warning(title, message, closeable)</code></li>
                        <li><code>Notification.error(title, message, closeable)</code></li>
                    </ul>
                    <CommenTable
                        data={[
                            ['title', '提示内容标题', 'string', '通知'],
                            ['message', '提示内容', 'string', ''],
                            ['closeable', '是否显示关闭按钮', 'boolean', 'true'],
                        ]}
                    />
                </Card>
            </div>
        );
    }
}
