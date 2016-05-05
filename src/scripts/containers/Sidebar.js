import React, { Component } from 'react';
import { Link } from 'react-router';


/**
 * 侧边栏Sidebar.
 */
export default class Sidebar extends Component {
    /**
     * 构造函数.
     */
    constructor(props, context) {
        super(props, context);
    }
    menuClickHandle(path){
    }
    /**
     * 组件渲染.
     */
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-title">react-dui</div>
                <div className="list-group">
                    <Link to="/buttons">Buttons</Link>
                    <Link to="/app/goods">实时策略</Link>
                </div>
            </div>
        );
    }
}