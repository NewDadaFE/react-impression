import React, { Component } from 'react';
import { Card, Row, Col, Breadcrumb, Input, Upload, Icon } from '../components/impression';

export default class UploadView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Basic</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Input type="file"/>
                            </Col>
                            <Col>
                                <Input type="file" placeholder="请上传资质证明"/>
                            </Col>
                            <Col>
                                <Upload btnText="附件" btnStyle="primary"/>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Preview</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Upload preview/>
                            </Col>
                            <Col>
                                <Upload preview message="上传图片">
                                    <Icon type="plus"></Icon>
                                </Upload>
                            </Col>
                            <Col>
                                <Upload src="https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg" preview/>
                            </Col>
                        </Row>
                    </Card>
                </Card>
            </div>
        );
    }
}

UploadView.title = 'Upload';
