import React, { Component } from 'react';
import { Card, Row, Col, Breadcrumb } from '../../components';

export default class LayoutView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Grid</h5>
                    <Card block>
                           <Row>
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
                    </Card>
                </Card>
            </div>
        );
    }
}

LayoutView.title = 'Layout';