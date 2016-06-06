import React, { Component } from 'react';
import { Card, Navbar, Nav, Form, Button, Breadcrumb } from '../../components';
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
                            <Navbar.Brand>Navbar</Navbar.Brand>
                            <Nav>
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
                            <Form>
                                <Form.Group>
                                    <input className="form-control" type="text" placeholder="Search"/>
                                </Form.Group>
                                <Button style="secondary">Search</Button>
                            </Form>
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