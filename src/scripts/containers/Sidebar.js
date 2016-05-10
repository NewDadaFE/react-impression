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
                <div className="sidebar-title">react-dui</div>
                <div className="list-group">
                    <Link to="/image" className="list-group-item">Image</Link>
                    <Link to="/table" className="list-group-item">Table</Link>
                    <Link to="/button" className="list-group-item">Button</Link>
                    <Link to="/button-group" className="list-group-item">Button-Group</Link>
                    <Link to="/input-group" className="list-group-item">Input-Group</Link>
                    <Link to="/tag" className="list-group-item">Tag</Link>
                    <Link to="/alert" className="list-group-item">Alert</Link>
                    <Link to="/card" className="list-group-item">Card</Link>
                    <Link to="/breadcrumb" className="list-group-item">Breadcrumb</Link>
                    <Link to="/progress" className="list-group-item">Progress</Link>
                    <Link to="/pagination" className="list-group-item">Pagination</Link>
                    <Link to="/list-group" className="list-group-item">List-Group</Link>
                    <Link to="/modal" className="list-group-item">Modal</Link>
                    <Link to="/tooltip" className="list-group-item">Tooltip</Link>
                    <Link to="/popover" className="list-group-item">Popover</Link>
                    <Link to="/nav" className="list-group-item">Nav</Link>
                </div>
            </div>
        );
    }
}