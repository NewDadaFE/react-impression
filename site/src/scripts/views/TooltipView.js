import React, { Component, PropTypes } from 'react';
import { Card, Row, Col, Button, Tooltip } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components';

export default class TooltipView extends Component {
    static propTypes = {
        routes: PropTypes.array,
    }
    render() {
        return (
            <div>
                <Breadcrumb routes={this.props.routes} />
                <Card block noborder>
                    <h5>Examples</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Tooltip position="right" content="Tooltip right">
                                        <Button theme="primary" onMouseOver={this.onMouseOver}>
                                            Right
                                        </Button>
                                    </Tooltip>
                                </Col>
                                <Col>
                                    <Tooltip position="top" content="Tooltip top">
                                        <Button theme="primary">Top</Button>
                                    </Tooltip>
                                </Col>
                                <Col>
                                    <Tooltip position="bottom" content="Tooltip bottom">
                                        <Button theme="primary">Bottom</Button>
                                    </Tooltip>
                                </Col>
                                <Col>
                                    <Tooltip position="left" content="Tooltip left">
                                        <Button theme="primary">Left</Button>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Tooltip } from 'impression-react';\n\n`}
                            {`<Tooltip position="right" content="Tooltip right">...</Tooltip>\n`}
                            {`<Tooltip position="top" content="Tooltip top">..</Tooltip>\n`}
                            {`<Tooltip position="bottom" content="Tooltip bottom">...</Tooltip>\n`}
                            {'<Tooltip position="left" content="Tooltip left">...</Tooltip>'}
                        </Highlight>
                    </Card>
                    <h5>Tooltip API</h5>
                    <CommenTable
                        data={[
                            ['position', '设置提示工具位置，可选值为 left、right、top、bottom', 'string', 'right'],
                            ['content', '提示工具内容', 'string', ''],
                            ['children', '必填，子节点', 'element', ''],
                        ]}
                    />
                </Card>
            </div>
        );
    }
}
