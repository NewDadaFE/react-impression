import React, { Component } from 'react';
import { Card, Row, Col, Button, Image, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class CardView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Examples</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Block>
                                            <h4>Title</h4>
                                            <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                        </Card.Block>
                                        <Image fluid src="http://placehold.it/350x200"/>
                                        <Card.Block>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">More</Button>
                                        </Card.Block>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Image fluid src="http://placehold.it/350x200"/>
                                        <Card.Block>
                                            <h4>Title</h4>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">Detail</Button>
                                        </Card.Block>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Block>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </Card.Block>
                                        <Image fluid src="http://placehold.it/350x200"/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Block>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">OK</Button>
                                        </Card.Block>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Card } from 'impression-react';\n\n<Card>\n  <Card.Block><h4>Title</h4>...</Card.Block>\n  <Image fluid src="http://placehold.it/350x200"/>\n  ...\n</Card>`}
                        </Highlight>
                    </Card>
                    <h5>Text align</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
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
                                <Col>
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
                                <Col>
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
                        </Card.Block>
                        <Highlight>
                            {`<Card>...</Card>\n<Card className="text-center">..</Card>\n<Card className="text-right">...</Card>`}
                        </Highlight>
                    </Card>
                    <h5>Header and footer</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Header>
                                            Header
                                        </Card.Header>
                                        <Card.Block>
                                            <h4>Left</h4>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">OK</Button>
                                            <Button theme="default" className="offset-spacer-l">Cancel</Button>
                                        </Card.Block>
                                        <Card.Footer>
                                            footer
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="no-margin">
                                                Header
                                            </h4>
                                        </Card.Header>
                                        <Card.Block>
                                            <h4>center</h4>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">OK</Button>
                                            <Button theme="default" className="offset-spacer-l">Cancel</Button>
                                        </Card.Block>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Block>
                                            <h4>Right</h4>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Button theme="primary">OK</Button>
                                            <Button theme="default" className="offset-spacer-l">Cancel</Button>
                                        </Card.Block>
                                        <Card.Footer>
                                            <h5 className="no-margin">
                                                footer
                                            </h5>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`<Card>\n  <Card.Header>Header</Card.Header>\n  <Card.Block>...</Card.Block>\n  <Card.Footer>footer</Card.Footer>\n</Card>`}
                        </Highlight>
                    </Card>
                    <h5 className="text-secondary">Card API</h5>
                    <CommenTable
                        data = {[
                            ['block', '是否显示为快级元素', 'boolean', 'false'],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h5 className="text-secondary">Card.Header API</h5>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h5 className="text-secondary">Card.Block API</h5>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h5 className="text-secondary">Card.Footer API</h5>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

CardView.title = 'Card';
