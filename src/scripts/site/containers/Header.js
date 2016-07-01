import React, { Component } from 'react';
import { Navbar, Nav, Button, InputGroup, Form, Icon, Badge } from '../../components';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <Navbar>
                <Navbar.SidebarTitle>Impression</Navbar.SidebarTitle>
                <Button style="secondary"><i className="fa fa-bars"></i></Button>
                <Nav/>
                <Form type="inline">
                    <span>
                        Welcome to Impression React components.
                    </span>
                    <a href="https://github.com/shenlq/impression" className="text-muted"><Icon size="lg" type="github"/></a>
                    <a href="javascript:void(0);" className="text-muted">
                        <Badge style="danger">
                            <Icon size="lg" type="bell"/>
                        </Badge>
                    </a>
                    <a href="javascript:void(0);" className="text-muted">
                        <Badge content="3" size="sm">
                            <Icon size="lg" type="envelope-o"/>
                        </Badge>
                    </a>
                </Form>
            </Navbar>
        );
    }
}