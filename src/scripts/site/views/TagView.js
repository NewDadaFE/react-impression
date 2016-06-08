import React, { Component } from 'react';
import { Card, Row, Col, Tag, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class TagView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <h1>Example heading <Tag>tag</Tag></h1>
                        <h2>Example heading <Tag>tag</Tag></h2>
                        <h3>Example heading <Tag>tag</Tag></h3>
                        <h4>Example heading <Tag>tag</Tag></h4>
                        <h5>Example heading <Tag>tag</Tag></h5>
                        <h6>Example heading <Tag>tag</Tag></h6>
                    </Card>
                    <h3>Theme tag</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Tag style="default">default</Tag>
                            </Col>
                            <Col>
                                <Tag style="primary">primary</Tag>
                            </Col>
                            <Col>
                                <Tag style="success">success</Tag>
                            </Col>
                            <Col>
                                <Tag style="info">info</Tag>
                            </Col>
                            <Col>
                                <Tag style="warning">warning</Tag>
                            </Col>
                            <Col>
                                <Tag style="danger">danger</Tag>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Pill tag</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Tag style="default" shape="pill">default</Tag>
                            </Col>
                            <Col>
                                <Tag style="primary" shape="pill">primary</Tag>
                            </Col>
                            <Col>
                                <Tag style="success" shape="pill">success</Tag>
                            </Col>
                            <Col>
                                <Tag style="info" shape="pill">info</Tag>
                            </Col>
                            <Col>
                                <Tag style="warning" shape="pill">warning</Tag>
                            </Col>
                            <Col>
                                <Tag style="danger" shape="pill">danger</Tag>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['style', '设置标签样式，可选值为 default、primary、success、info、warning、danger', 'string', ''],
                            ['shape', '设置标签形状，可选值为 pill', 'string', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

TagView.title = 'Tag';