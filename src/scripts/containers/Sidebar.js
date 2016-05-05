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
                    <Link to="/button" className="list-group-item">Button</Link>
                    <Link to="/button-group" className="list-group-item">Button Group</Link>
                </div>
            </div>
        );
    }
}