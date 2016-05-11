import React, { Component } from 'react';


/**
 * Header.
 */
export default class Header extends Component{
    render(){
        return (
            <div>
                <nav className="navbar">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">首页</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PC端</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">移动端</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">动画</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}