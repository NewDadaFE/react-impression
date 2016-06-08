import React, { Component } from 'react';
import { Card, Row, Col, Button, Tooltip, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class TooltipView extends Component{
    onMouseOver(){
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Tooltip position="right" content="Tooltip right">
                                    <Button style="primary" onMouseOver={this.onMouseOver}>Right</Button>
                                </Tooltip>
                            </Col>
                            <Col>
                                <Tooltip position="top" content="Tooltip top">
                                    <Button style="primary">Top</Button>
                                </Tooltip>
                            </Col>
                            <Col>
                                <Tooltip position="bottom" content="Tooltip bottom">
                                    <Button style="primary">Bottom</Button>
                                </Tooltip>
                            </Col>
                            <Col>
                                <Tooltip position="left" content="Tooltip left">
                                    <Button style="primary">Left</Button>
                                </Tooltip>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Tooltip API</h3>
                    <CommenTable
                        data = {[
                            ['position', '设置提示工具位置，可选值为 left、right、top、bottom', 'string', 'right'],
                            ['content', '提示工具内容', 'string', ''],
                            ['children', '必填，子节点', 'element', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

TooltipView.title = 'Tooltip';