import React, { Component } from 'react';
import { Link } from 'react-router';


/**
 * 侧边栏Sidebar.
 */
export default class Sidebar extends Component {
    /**
     * 组件渲染.
     */
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <Link to="/image">Image</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/table">Table</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/button">Button</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/button-group">Button-Group</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/input-group">Input-Group</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tag">Tag</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/alert">Alert</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/card">Card</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/breadcrumb">Breadcrumb</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/progress">Progress</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pagination">Pagination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list-group">List-Group</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/modal">Modal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tooltip">Tooltip</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/popover">Popover</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nav">Nav</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/navbar">Navbar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/form">Form</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dropdowns">Dropdowns</Link>
                    </li>
                </ul>
                <div className="sidebar-footer"></div>
            </div>
        );
    }
}