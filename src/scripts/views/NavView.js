import React, { Component } from 'react';
import { NavItem, Nav as Test } from '../components';

export default class NavView extends Component{
    render(){
        return (
            <div>
                <h3>Inline</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-inline">
                                <NavItem href='#' active>Link</NavItem>
                                <NavItem href='#'>Link</NavItem>
                                <NavItem href='#'>Anothor link</NavItem>
                                <NavItem href='#' disabled>Disabled</NavItem>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Tabs</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Test>
                                <NavItem href='#' active>Active</NavItem>
                                <NavItem href='#'>Link</NavItem>
                                <NavItem href='#'>Anothor link</NavItem>
                                <NavItem href='#' disabled>Disabled</NavItem>
                            </Test>
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