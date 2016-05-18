import React, { Component } from 'react';
import { Card, Row, Col, Popover, Button } from '../components';

export default class PopoverView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Row>
                        <Col col="8">
                            <Popover position="right" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                <Button style="primary">Right</Button>
                            </Popover>
                        </Col>
                        <Col col="4">
                            <Popover position="left" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                <Button style="primary">Left</Button>
                            </Popover>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="8">
                            <Popover position="top" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                <Button style="primary">Top</Button>
                            </Popover>
                        </Col>
                        <Col col="4">
                            <Popover position="bottom" title="popover" content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">
                                <Button style="primary">Bottom</Button>
                            </Popover>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}