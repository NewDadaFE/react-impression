import React, { Component } from 'react';
import { Card, Row, Col, Popover, Button, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class PopoverView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes.slice(1)}/>
                <Card block noborder>
                    <h5>Examples</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col col="8">
                                    <Popover position="right" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                        <Button theme="primary">Right</Button>
                                    </Popover>
                                </Col>
                                <Col col="4">
                                    <Popover position="left" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                        <Button theme="primary">Left</Button>
                                    </Popover>
                                </Col>
                            </Row>
                            <Row>
                                <Col col="8">
                                    <Popover position="top" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                        <Button theme="primary">Top</Button>
                                    </Popover>
                                </Col>
                                <Col col="4">
                                    <Popover position="bottom" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                        <Button theme="primary">Bottom</Button>
                                    </Popover>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Popover } from 'impression-react';\n\n<Popover position="right" title="popover" content="...">...</Popover>\n<Popover position="left" title="popover" content="...">...</Popover>\n<Popover position="top" title="popover" content="...">...</Popover>\n<Popover position="bottom" title="popover" content="...">...</Popover>`}
                        </Highlight>
                    </Card>
                    <h5>Popover API</h5>
                    <CommenTable
                        data = {[
                            ['position', '设置弹出框位置，可选值为 left、right、top、bottom', 'string', 'right'],
                            ['title', '弹出框标题', 'string', ''],
                            ['content', '弹出框主内容', 'string', ''],
                            ['children', '必填，子节点', 'element', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

PopoverView.title = 'Popover';
