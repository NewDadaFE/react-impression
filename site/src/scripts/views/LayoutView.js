import React, { PropTypes } from 'react';
import { Card, Row, Col } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components/';

const LayoutView = ({ routes }) => {
    return (
        <div>
            <Breadcrumb routes={routes} />
            <Card block noborder>
                <h5>Grid</h5>
                <Card>
                    <Card.Block>
                        <Row>
                            {false}
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">1</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">2</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bg-primary text-center">3</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">3</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">3</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">3</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bg-primary text-center">4</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">4</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">4</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bg-primary text-center">6</div>
                            </Col>
                            <Col>
                                <div className="bg-primary text-center">6</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="bg-primary text-center">12</div>
                            </Col>
                        </Row>
                    </Card.Block>
                    <Highlight>
                        {'<Row>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {'  <Col>1</Col>\n'}
                        {`</Row>\n`}
                        {'<Row>\n'}
                        {'  <Col>2</Col>\n'}
                        {'  <Col>2</Col>\n'}
                        {'  <Col>2</Col>\n'}
                        {'  <Col>2</Col>\n'}
                        {'  <Col>2</Col>\n'}
                        {'  <Col>2</Col>\n'}
                        {`</Row>\n`}
                        {'<Row>\n'}
                        {'  <Col>3</Col>\n'}
                        {'  <Col>3</Col>\n'}
                        {'  <Col>3</Col>\n'}
                        {'  <Col>3</Col>\n'}
                        {`</Row>\n`}
                        {'<Row>\n'}
                        {'  <Col>6</Col>\n'}
                        {'  <Col>6</Col>\n'}
                        {'</Row>'}
                    </Highlight>
                </Card>
                <h3 className="text-secondary">Col API</h3>
                <CommenTable
                    data={[
                        ['col', '所占比例', 'number、string', ''],
                        ['offset', '向左偏移（margin）', 'number、string', ''],
                        ['push', '向左偏移', 'number、string', ''],
                        ['pull', '向右偏移', 'number、string', ''],
                    ]} />
            </Card>
        </div>
    );
};

LayoutView.propTypes = {
    routes: PropTypes.array,
};

export default LayoutView;
