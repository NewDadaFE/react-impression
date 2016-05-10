import React, { Component } from 'react';

export default class NavbarView extends Component{
    render(){
        return (
            <div>
                <h3>Default</h3>
                <div className="card card-block">
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
                <h3>Primary</h3>
                <div className="card card-block">
                    <nav className="navbar navbar-primary">
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
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                    </nav>
                </div>
                <h3>Pure</h3>
                <div className="card card-block bg-inverse">
                    <nav className="navbar navbar-pure">
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
            </div>
        );
    }
}