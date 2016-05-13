import React, { Component } from 'react';
import { NavItem, Nav } from '../components';

export default class NavView extends Component{
    handleSelect(selectKey){
        console.log(this);
        console.log(selectKey);
    }
    render(){
        return (
            <div>
                <h3>Inline</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-inline">
                                <NavItem active>Link</NavItem>
                                <NavItem>Link</NavItem>
                                <NavItem>Anothor link</NavItem>
                                <NavItem disabled>Disabled</NavItem>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Tabs</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Nav activeKey={2} onSelect={this.handleSelect} style="tabs">
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
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Another link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Stacked pills</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <ul className="nav nav-pills nav-stacked">
                                <li className="nav-item">
                                    <a className="nav-link active">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Another link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}