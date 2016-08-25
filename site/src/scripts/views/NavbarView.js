import React, { Component } from 'react';
import { Card, Navbar, Nav, Form, Button, Breadcrumb, Flex } from '../components/impression';
import { CommenTable } from '../components';

export default class NavbarView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Default</h5>
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
                                    <Button theme="primary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h5>Primary</h5>
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
                                    <Button theme="primary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h5>Pure</h5>
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
                                    <Button theme="secondary">Search</Button>
                                </Form>
                            </Flex>
                        </Navbar>
                    </Card>
                    <h5 className="text-secondary">Navbar API</h5>
                     <CommenTable
                         data = {[
                             ['style', '设置导航条样式，可选值为 pure、primary', 'string', ''],
                             ['className', '自定义样式', 'string', ''],
                         ]}
                     ></CommenTable>
                     <h5 className="text-secondary">Navbar.Brand API</h5>
                     <CommenTable
                         data = {[
                             ['href', '设置连接', 'string', ''],
                             ['className', '自定义样式', 'string', ''],
                         ]}
                     ></CommenTable>
                     <h5 className="text-secondary">Navbar.SidebarTitle API</h5>
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
