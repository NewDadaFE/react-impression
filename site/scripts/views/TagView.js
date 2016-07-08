import React, { Component } from 'react';
import { Card, Row, Col, Tag, Breadcrumb } from '../components/base';
import { CommenTable } from '../components';

export default class TagView extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            shows: [true, true, true, true, true, true]
        };

        this.closeTagHandle = this.closeTagHandle.bind(this);
    }
    /**
     * 隐藏Tag.
     * @param  {[Number]} index [索引]
     */
    closeTagHandle(index){
        this.setState({
            shows: this.state.shows.map((item, indx) => {
                return indx === index ? false : item;
            })
        });
    }
    render(){
        let { shows } = this.state;

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
                    <h3>Closeable</h3>
                    <Card block>
                        <Row>
                            <Col>
                                { shows[0] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(0)} style="default" className="offset-l">apple</Tag>
                                }
                                { shows[1] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(1)} style="default" className="offset-l">orange</Tag>
                                }
                                { shows[2] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(2)} style="default" className="offset-l">banana</Tag>
                                }
                                { shows[3] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(3)} style="default" className="offset-l">pear</Tag>
                                }
                                { shows[4] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(4)} style="default" className="offset-l">watermelon</Tag>
                                }
                                { shows[5] &&
                                    <Tag closeable={true} onClose={() => this.closeTagHandle(5)} style="default" className="offset-l">peach</Tag>
                                }
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