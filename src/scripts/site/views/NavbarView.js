import React, { Component } from 'react';
import { Card, Navbar, Nav, NavItem, Form, Button } from '../../components';
import { CommenTable } from '../components';

export default class NavbarView extends Component{
    render(){
        return (
            <div>
                <h3>Default</h3>
                <Card>
                    <Navbar>
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <Form type="inline">
                            <Form.Group>
                                <input className="form-control" type="text" placeholder="Search"/>
                            </Form.Group>
                            <Button style="primary">Search</Button>
                        </Form>
                    </Navbar>
                </Card>
                <h3>Primary</h3>
                <Card>
                    <Navbar style="pure">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <Form>
                            <Form.Group>
                                <input className="form-control" type="text" placeholder="Search"/>
                            </Form.Group>
                            <Button style="primary">Search</Button>
                        </Form>
                    </Navbar>
                </Card>
                <h3>Pure</h3>
                <Card>
                    <Navbar style="primary">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                        <Nav>
                            <NavItem href="#">Home</NavItem>
                            <NavItem href="#">Features</NavItem>
                            <NavItem href="#">Pricing</NavItem>
                            <NavItem href="#">About</NavItem>
                        </Nav>
                        <Form>
                            <Form.Group>
                                <input className="form-control" type="text" placeholder="Search"/>
                            </Form.Group>
                            <Button style="secondary">Search</Button>
                        </Form>
                    </Navbar>
                </Card>
                <h3>Navbar API</h3>
                 <CommenTable
                     data = {[
                         ['style', '设置导航条样式，可选值为 pure、primary', 'string', ''],
                         ['className', '自定义样式', 'string', ''],
                     ]}
                 ></CommenTable>
                 <h3>Navbar.Brand API</h3>
                 <CommenTable
                     data = {[
                         ['href', '设置连接', 'string', ''],
                         ['className', '自定义样式', 'string', ''],
                     ]}
                 ></CommenTable>
                 <h3>Navbar.SidebarTitle API</h3>
                 <CommenTable
                     data = {[
                         ['img', '设置图片连接', 'string', ''],
                         ['className', '自定义样式', 'string', ''],
                     ]}
                 ></CommenTable>
            </div>
        );
    }
}