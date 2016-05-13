import React, { Component } from 'react';
import { NavItem, Nav } from '../components';

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
                            <Nav activeKey={1} onSelect={this.selectHandle} style="inline">
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
                            <Nav activeKey={2} onSelect={this.selectHandle} style="tabs">
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
                            <Nav activeKey={2} onSelect={this.selectHandle} style="pills">
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <h3>Stacked pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <Nav activeKey={2} onSelect={this.selectHandle} style="pills" stacked>
                                <NavItem eventKey={1}>Active</NavItem>
                                <NavItem eventKey={2}>Link</NavItem>
                                <NavItem eventKey={3}>Anothor link</NavItem>
                                <NavItem eventKey={4} disabled>Disabled</NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}