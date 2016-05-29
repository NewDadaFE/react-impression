import React, { Component } from 'react';
import { Card, Row, Col, Button, Image } from  '../../components';
import { CommenTable } from '../components';

export default class CardView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Row>
                        <Col col="3">
                            <Card>
                                <Card.Block>
                                    <h4>Title</h4>
                                    <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                </Card.Block>
                                <Image fluid src="http://placehold.it/350x200"/>
                                <Card.Block>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">More</Button>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="3">
                            <Card>
                                <Image fluid src="http://placehold.it/350x200"/>
                                <Card.Block>
                                    <h4>Title</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">Detail</Button>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="3">
                            <Card>
                                <Card.Block>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </Card.Block>
                                <Image fluid src="http://placehold.it/350x200"/>
                            </Card>
                        </Col>
                        <Col col="3">
                            <Card>
                                <Card.Block>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">OK</Button>
                                </Card.Block>
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <h3>Text align</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <Card>
                                <Image fluid src="http://placehold.it/350x200"/>
                                <Card.Block>
                                    <h4>Left</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#">Card link</a>
                                    <a href="#" className="offset-spacer-l">Another link</a>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="4">
                            <Card className="text-center">
                                <Image fluid src="http://placehold.it/350x200"/>
                                <Card.Block>
                                    <h4>Center</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#">Card link</a>
                                    <a href="#" className="offset-spacer-l">Another link</a>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="4">
                            <Card className="text-right">
                                <Image fluid src="http://placehold.it/350x200"/>
                                <Card.Block>
                                    <h4>Right</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#">Card link</a>
                                    <a href="#" className="offset-spacer-l">Another link</a>
                                </Card.Block>
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <h3>Header and footer</h3>
                <Card block>
                    <Row>
                        <Col col="4">
                            <Card>
                                <Card.Header>
                                    Header
                                </Card.Header>
                                <Card.Block>
                                    <h4>Left</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">OK</Button>
                                    <Button style="default" className="offset-spacer-l">Cancel</Button>
                                </Card.Block>
                                <Card.Footer>
                                    footer
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col col="4">
                            <Card>
                                <Card.Header>
                                    <h4 className="no-margin">
                                        Header
                                    </h4>
                                </Card.Header>
                                <Card.Block>
                                    <h4>center</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">OK</Button>
                                    <Button style="default" className="offset-spacer-l">Cancel</Button>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="4">
                            <Card>
                                <Card.Block>
                                    <h4>Right</h4>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button style="primary">OK</Button>
                                    <Button style="default" className="offset-spacer-l">Cancel</Button>
                                </Card.Block>
                                <Card.Footer>
                                    <h5 className="no-margin">
                                        footer
                                    </h5>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <h3 className="text-secondary">Card API</h3>
                <CommenTable
                    data = {[
                        ['block', '是否显示为快级元素', 'boolean', 'false'],
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
                <h3 className="text-secondary">Card.Header API</h3>
                <CommenTable
                    data = {[
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
                <h3 className="text-secondary">Card.Block API</h3>
                <CommenTable
                    data = {[
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
                <h3 className="text-secondary">Card.Footer API</h3>
                <CommenTable
                    data = {[
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}