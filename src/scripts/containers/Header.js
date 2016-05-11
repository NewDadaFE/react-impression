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
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <form className="form form-inline pull-xs-right">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Search"/>
                        </div>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        );
    }
}