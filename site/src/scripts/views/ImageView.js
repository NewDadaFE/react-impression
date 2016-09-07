import React, { PropTypes } from 'react';
import { Card, Row, Col, Image } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components';

const ImageView = ({ routes }) => {
    return (
        <div>
            <Breadcrumb routes={routes} />
            <Card block noborder>
                <h5>Fluid</h5>
                <Card>
                    <Card.Block>
                        <Image fluid src="http://placehold.it/2500x350" />
                    </Card.Block>
                    <Highlight>
                        {'<Image fluid src="http://placehold.it/2500x350" />'}
                    </Highlight>
                </Card>
                <h5>Shape</h5>
                <Card>
                    <Card.Block>
                        <Row>
                            <Col>
                                <Image rounded src="http://placehold.it/200x200" />
                            </Col>
                            <Col>
                                <Image circle src="http://placehold.it/200x200" />
                            </Col>
                            <Col>
                                <Image thumbnail src="http://placehold.it/200x200" />
                            </Col>
                        </Row>
                    </Card.Block>
                    <Highlight>
                        {`<Image rounded src="http://placehold.it/200x200" />\n`}
                        {`<Image circle src="http://placehold.it/200x200" />\n`}
                        {'<Image thumbnail src="http://placehold.it/200x200" />'}
                    </Highlight>
                </Card>
                <h5 className="text-secondary">API</h5>
                <CommenTable
                    data={[
                        ['fluid', '图片是否自适应', 'bool', 'false'],
                        ['rounded', '图片是否圆角', 'bool', 'false'],
                        ['circle', '图片是否为圆形', 'bool', 'false'],
                        ['thumbnail', '图片是否为缩略图', 'bool', 'false'],
                    ]}
                />
            </Card>
        </div>
    );
};

ImageView.propTypes = {
    routes: PropTypes.array,
};

export default ImageView;
