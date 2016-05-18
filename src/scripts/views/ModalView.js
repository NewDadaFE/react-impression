import React, { Component } from 'react';
import { Modal, Button, Card, Row, Col } from '../components';

export default class ModalView extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
            size: null,
        };

        this.toggleModalHandle = this.toggleModalHandle.bind(this);
    }
    //显示/隐藏modal
    toggleModalHandle(size){
        this.setState({
            size,
            show: !this.state.show
        });
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <Card block>
                    <Row>
                        <Col col="2">
                            <Button style="primary" onClick={() => this.toggleModalHandle(null)}>Modal</Button>
                        </Col>
                        <Col col="2">
                            <Button style="primary" onClick={() => this.toggleModalHandle('sm')}>SM Modal</Button>
                        </Col>
                        <Col col="2">
                            <Button style="primary" onClick={() => this.toggleModalHandle('lg')}>LG Modal</Button>
                        </Col>
                    </Row>
                </Card>
                { this.state.show &&
                    <Modal size={this.state.size}>
                        <Modal.Header>
                            <Button close onClick={this.toggleModalHandle}>&times;</Button>
                            <h5 className="no-margin">Modal title</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <p>One fine body&hellip;</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button style="default" onClick={this.toggleModalHandle}>Close</Button>
                            <Button style="primary">Save</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        );
    }
}