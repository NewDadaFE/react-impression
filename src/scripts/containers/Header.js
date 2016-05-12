import React, { Component } from 'react';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <nav className="navbar">
                <div className="navbar-sidebar-title">
                    <img style={{maxHeight: '45px'}} src="http://localhost:9016/images/logo.png"/>Impression
                </div>
                <button className="btn btn-secondary"><i className="fa fa-bars"></i></button>
            </nav>
        );
    }
}