import React, { Component } from 'react';
import { Card, Row, Col, Image, Breadcrumb } from '../../components';
import { CommenTable } from '../components';

export default class ImageView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Image fluid</h3>
                    <Card block>
                        <Image fluid src="http://placehold.it/2500x350"/>
                    </Card>
                    <h3>Image shape</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Image rounded src="http://placehold.it/200x200"/>
                            </Col>
                            <Col>
                                <Image circle src="http://placehold.it/200x200"/>
                            </Col>
                            <Col>
                                <Image thumbnail src="http://placehold.it/200x200"/>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['fluid', '图片是否自适应', 'bool', 'false'],
                            ['rounded', '图片是否圆角', 'bool', 'false'],
                            ['circle', '图片是否为圆形', 'bool', 'false'],
                            ['thumbnail', '图片是否为缩略图', 'bool', 'false'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

ImageView.title = 'Image';