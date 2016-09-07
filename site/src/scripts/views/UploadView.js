import React, { Component, PropTypes } from 'react';
import { Card, Row, Col, Input, Upload, Icon, Button } from '../components/impression';
import { Highlight, Breadcrumb } from '../components';

export default class UploadView extends Component {
    static propTypes = {
        routes: PropTypes.array,
    }
    // 预览：获取上传文件
    getUploadFileHandle = () => {
        // console.log(Upload.getValue(this.refs.upload));
    }
    // 获取文件
    getFileHandle = () => {
        // console.log(Input.getValue(this.refs.file));
    }
    render() {
        return (
            <div>
                <Breadcrumb routes={this.props.routes} />
                <Card block noborder>
                    <h3>Basic</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Input ref="file" type="file" />
                                </Col>
                                <Col>
                                    <Input type="file" placeholder="请上传资质证明" />
                                </Col>
                                <Col>
                                    <Upload btnText="附件" btnStyle="primary" />
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Upload } from 'impression-react';\n\n`}
                            {`<Input type="file"/>\n`}
                            {`<Input type="file" placeholder="请上传资质证明"/>\n`}
                            {'<Upload btnText="附件" btnStyle="primary"/>'}
                        </Highlight>
                    </Card>
                    <h3>Preview</h3>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Upload ref="upload" preview />
                                </Col>
                                <Col>
                                    <Upload preview message="上传图片">
                                        <Icon type="plus" />
                                    </Upload>
                                </Col>
                                <Col>
                                    <Upload src="https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg" preview />
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Upload preview /> \n`}
                            {`<Upload preview message="上传图片"><Icon type="plus" /></Upload>\n`}
                            {'<Upload src="..." preview />'}
                        </Highlight>
                    </Card>
                    <Card block>
                        <Button onClick={this.getFileHandle}>获取</Button>
                    </Card>
                </Card>
            </div>
        );
    }
}
