import React, { Component } from 'react';
import { Card, Row, Col, Loading, Button, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components/';

export default class LoadingView extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            type: 'cyclone'
        };

        this.showLoadingHandle = this.showLoadingHandle.bind(this);
    }
    /**
     * 显示Loading.
     * @param  {String} type loading类型
     */
    showLoadingHandle(type){
        this.setState({
            type,
            msg: type
        });
        Loading.show();
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Loading</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Button theme="default" onClick={() => this.showLoadingHandle('fountain')}>fountain</Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={() => this.showLoadingHandle('wave')}>wave</Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={() => this.showLoadingHandle('pendule')}>pendule</Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={() => this.showLoadingHandle('cyclone')}>cyclone</Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Loading } from 'impression-react';\n\n<Loading type="fountain" loadingMsg="fountain"/>\n<Loading type="wave" loadingMsg="wave"/>\n<Loading type="pendule" loadingMsg="pendule"/>\n<Loading type="cyclone" loadingMsg="cyclone"/>`}
                        </Highlight>
                    </Card>
                    <Loading type={this.state.type} loadingMsg={this.state.msg} closeable={true}/>
                    <h5>Loading API</h5>
                    <ul>
                        <li><code>Loading.show()</code></li>
                        <li><code>Loading.hide()</code></li>
                    </ul>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                            ['type', '类型，可选值为 fountain, wave, pendule, cyclone', 'string', 'cyclone'],
                            ['loadingMsg', '加载文本', 'string', '加载中'],
                            ['closeable', '是否可关闭', 'boolean', 'false'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

LoadingView.title = 'Loading';
