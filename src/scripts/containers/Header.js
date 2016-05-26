import React, { Component } from 'react';
import { Navbar, Nav, Button, InputGroup, Form } from '../components';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <Navbar>
                <Navbar.SidebarTitle img="images/logo.png">Impression</Navbar.SidebarTitle>
                <Button style="secondary"><i className="fa fa-bars"></i></Button>
                <Nav/>
                <Form type="inline">
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Input placeholder="something" style={{width: '220px'}}/>
                            <InputGroup.Button style="primary">Search</InputGroup.Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Navbar>
        );
    }
}