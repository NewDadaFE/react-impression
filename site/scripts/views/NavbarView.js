import React, { Component } from 'react';
<<<<<<< HEAD
import { Card, Navbar, Nav, Form, Button, Breadcrumb, Flex } from '../components/base';
=======
import { Card, Navbar, Nav, Form, Button, Breadcrumb, Container, Flex } from '../components/base';
>>>>>>> 307d92bd479572d74c96544f90be193129a1d2b5
import { CommenTable } from '../components';

export default class NavbarView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Default</h3>
                    <Card>
                        <Navbar>
                            <Flex align="middle">
                                <Navbar.Brand>Navbar</Navbar.Brand>
                                <Flex.Item>
                                    <Nav type="inline">
                                        <Nav.Link>
                                            <a href="#">Home</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Features</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Pricing</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">About</a>
                                        </Nav.Link>
                                    </Nav>
                                </Flex.Item>
                                <Form type="inline">
                                    <Form.Group>
                                        <input className="form-control" type="text" placeholder="Search"/>
                                    </Form.Group>
                                    <Button style="primary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h3>Primary</h3>
                    <Card>
                        <Navbar style="pure">
                            <Flex align="middle">
                                <Navbar.Brand>Navbar</Navbar.Brand>
                                <Flex.Item>
                                    <Nav type="inline">
                                        <Nav.Link>
                                            <a href="#">Home</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Features</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Pricing</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">About</a>
                                        </Nav.Link>
                                    </Nav>
                                </Flex.Item>
                                <Form type="inline">
                                    <Form.Group>
                                        <input className="form-control" type="text" placeholder="Search"/>
                                    </Form.Group>
                                    <Button style="primary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h3>Pure</h3>
                    <Card>
                        <Navbar style="primary">
                            <Flex align="middle">
                                <Navbar.Brand>Navbar</Navbar.Brand>
                                <Flex.Item>
                                    <Nav type="inline">
                                        <Nav.Link>
                                            <a href="#">Home</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Features</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">Pricing</a>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <a href="#">About</a>
                                        </Nav.Link>
                                    </Nav>
                                </Flex.Item>
                                <Form type="inline">
                                    <Form.Group>
                                        <input className="form-control" type="text" placeholder="Search"/>
                                    </Form.Group>
                                    <Button style="secondary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h3 className="text-secondary">Navbar API</h3>
                     <CommenTable
                         data = {[
                             ['style', '设置导航条样式，可选值为 pure、primary', 'string', ''],
                             ['className', '自定义样式', 'string', ''],
                         ]}
                     ></CommenTable>
                     <h3 className="text-secondary">Navbar.Brand API</h3>
                     <CommenTable
                         data = {[
                             ['href', '设置连接', 'string', ''],
                             ['className', '自定义样式', 'string', ''],
                         ]}
                     ></CommenTable>
                     <h3 className="text-secondary">Navbar.SidebarTitle API</h3>
                     <CommenTable
                         data = {[
                             ['img', '设置图片连接', 'string', ''],
                             ['className', '自定义样式', 'string', ''],
                         ]}
                     ></CommenTable>
                </Card>
            </div>
        );
    }
}

NavbarView.title = 'Navbar';
