import React, { Component } from 'react';
import { NavItem, Nav } from '../components';
import { CommenTable } from '../site';

export default class NavView extends Component{
    selectHandle(selectKey){
        // console.log(selectKey);
    }
    render(){
        return (
            <div>
                <h3>Inline</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={1} onSelect={this.selectHandle} type="inline">
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Tabs</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={2} onSelect={this.selectHandle} type="tab">
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={2} onSelect={this.selectHandle} type="pill">
                                <NavItem >Active</NavItem>
                                <NavItem >Link</NavItem>
                                <NavItem >Anothor link</NavItem>
                                <NavItem  disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Stacked pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="card card-block">
                                <Nav activeKey={2} onSelect={this.selectHandle} type="pill" stacked>
                                    <NavItem eventKey={1}>Active</NavItem>
                                    <NavItem eventKey={2}>Link</NavItem>
                                    <NavItem eventKey={3}>Anothor link</NavItem>
                                    <NavItem eventKey={4} disabled>Disabled</NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>API</h3>
                <CommenTable
                    data = {[
                        ['style', '', '', ''],
                        ['stacked', '', '', ''],
                        ['activeKey', '', '', ''],
                        ['onSelect', '', '', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}