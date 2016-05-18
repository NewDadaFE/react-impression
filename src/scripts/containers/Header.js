import React, { Component } from 'react';
import { Navbar, Nav, Button } from '../components';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <Navbar>
                <Navbar.SidebarTitle img="http://localhost:9016/images/logo.png">Impression</Navbar.SidebarTitle>
                <Button style="secondary"><i className="fa fa-bars"></i></Button>
                <Nav/>
                <form className="form form-inline pull-xs-right">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </div>
                    <Button style="primary">Search</Button>
                </form>
            </Navbar>
        );
    }
}