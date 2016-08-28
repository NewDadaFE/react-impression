import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Icon, Badge, Input, Image, Split, Flex } from '../components/impression';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <Navbar>
                <Form type="inline" className="pull-left">
                    <Navbar.Button theme="secondary">
                        <i className="fa fa-bars"></i>
                    </Navbar.Button>
                    <Input type="text" pill style={{width: '220px'}}>
                        <Icon type="search"/>
                    </Input>
                    <span> </span>
                </Form>
                <Form type="inline" className="pull-right">
                    <span>
                        Welcome to Impression React components.
                    </span>
                    <a href="https://github.com/shenlq/impression" className="text-muted"><Icon size="lg" type="github"/></a>
                    <a href="javascript:void(0);" className="text-muted">
                        <Badge theme="danger">
                            <Icon size="lg" type="bell"/>
                        </Badge>
                    </a>
                    <a href="javascript:void(0);" className="text-muted">
                        <Badge content="3" size="sm">
                            <Icon size="lg" type="envelope-o"/>
                        </Badge>
                    </a>
                    <span className="offset-r-lg">
                        <Image circle src="images/user.jpg" style={{width: '30px'}}/>
                        <span className="offset-r">Peter</span>
                        <Split/>
                        <span>logout</span>
                    </span>
                </Form>
            </Navbar>
        );
    }
}
