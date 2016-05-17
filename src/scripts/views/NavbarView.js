import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from '../components';

export default class NavbarView extends Component{
    render(){
        return (
            <div>
                <h3>Default</h3>
                <div className="card">
                    <Navbar>
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <form className="form form-inline pull-xs-right">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Search"/>
                            </div>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </Navbar>
                </div>
                <h3>Primary</h3>
                <div className="card">
                    <Navbar style="pure">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <form className="form form-inline pull-xs-right">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Search"/>
                            </div>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </Navbar>
                </div>
                <h3>Pure</h3>
                <div className="card">
                    <Navbar style="primary">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <form className="form form-inline pull-xs-right">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Search"/>
                            </div>
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                    </Navbar>
                </div>
            </div>
        );
    }
}