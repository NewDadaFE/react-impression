import React, { Component } from 'react';
import { Card, Row, Col, Breadcrumb } from '../components/base';
import { CommenTable } from '../components/';

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
                           <h3 className="text-secondary">Col API</h3>
                           <CommenTable
                               data = {[
                                   ['col', '所占比例', 'number、string', ''],
                                   ['offset', '向左偏移（margin）', 'number、string', ''],
                                   ['push', '向左偏移', 'number、string', ''],
                                   ['pull', '向右偏移', 'number、string', ''],
                               ]}
                           ></CommenTable>
                           <h3 className="text-secondary">组件应用扩展</h3>
                           <ul>
                               <li>col 应配合 Row 使用，很方便实现栅格布局。</li>
                               <li>若要实现五等分，要自定义样式，flex 属性值为 0 0 20%，max-width 设置为20%。</li>
                           </ul>
                    </Card>
                </Card>
            </div>
        );
    }
}

LayoutView.title = 'Layout';