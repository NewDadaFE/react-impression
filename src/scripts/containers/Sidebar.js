import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Flex, FlexItem } from '../components';



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
                <div className="sidebar-nav">
                    <div className="nav-item">
                        BASIC
                    </div>
                    <Link className="nav-link" to="/button"><i className="fa fa-hand-pointer-o fa-left"></i>Button</Link>
                    <Link className="nav-link" to="/table"><i className="fa fa-table fa-left"></i>Table</Link>
                    <Link className="nav-link" to="/form"><i className="fa fa-file-text-o fa-left"></i>Form<span className="fa-right tag tag-danger">Hot</span></Link>
                    <Link className="nav-link" to="/image"><i className="fa fa-picture-o fa-left"></i>Image</Link>
                    <div className="nav-item">
                        COMPONENT
                    </div>
                    <Link className="nav-link" to="/card"><i className="fa fa-television fa-left"></i>Card</Link>
                    <Link className="nav-link" to="/breadcrumb"><i className="fa fa-hand-o-right fa-left"></i>Breadcrumb</Link>
                    <Link className="nav-link" to="/tag"><i className="fa fa-tag fa-left"></i>Tag</Link>
                    <Link className="nav-link" to="/alert"><i className="fa fa-info-circle fa-left"></i>Alert<span className="fa-right tag tag-warning">1/4</span></Link>
                    <Link className="nav-link" to="/progress"><i className="fa fa-hourglass-start fa-left"></i>Progress</Link>
                    <Link className="nav-link" to="/button-group"><i className="fa fa-th-large fa-left"></i>ButtonGroup</Link>
                    <Link className="nav-link" to="/pagination"><i className="fa fa-angle-double-right fa-left"></i>Pagination</Link>
                    <Link className="nav-link" to="/nav"><i className="fa fa-bars fa-left"></i>Nav</Link>
                    <Link className="nav-link" to="/navbar"><i className="fa fa-tasks fa-left"></i>Navbar</Link>
                    <Link className="nav-link" to="/input-group"><i className="fa fa-outdent fa-left"></i>InputGroup</Link>
                    <Link className="nav-link" to="/list-group"><i className="fa fa-list fa-left"></i>ListGroup</Link>
                    <div className="nav-collapse">
                        <div className="nav-link"><i className="fa fa-list fa-left"></i>List-Group<i className="fa fa-angle-right pull-right"></i></div>
                        <div className="nav-collapse-block">
                            <Link className="nav-link" to="/image">Image</Link>
                            <Link className="nav-link" to="/table">Table</Link>
                            <Link className="nav-link" to="/button">Button</Link>
                            <Link className="nav-link" to="/button-group">Button-Group</Link>
                        </div>
                    </div>
                    <Link className="nav-link" to="/modal"><i className="fa fa-file-text fa-left"></i>Modal<span className="fa-right tag tag-success">New</span></Link>
                    <Link className="nav-link" to="/tooltip"><i className="fa fa-commenting-o fa-left"></i>Tooltip</Link>
                    <Link className="nav-link" to="/popover"><i className="fa fa-comments fa-left"></i>Popover</Link>
                    <Link className="nav-link" to="/dropdown"><i className="fa fa-caret-square-o-down fa-left"></i>Dropdown</Link>
                    <Link className="nav-link" to="/message"><i className="fa fa-bell fa-left"></i>Message</Link>
                    <Link className="nav-link" to="/notification"><i className="fa fa-bullhorn fa-left"></i>Notification</Link>
                </div>
                <div className="sidebar-footer">
                    <a href="javascript:void(0)" className="sidebar-footer-item">
                        <i className="fa fa-lg fa-question-circle fa-left"></i>帮助
                    </a>
                    <a href="javascript:void(0)" className="sidebar-footer-item">
                        <i className="fa fa-power-off fa-lg fa-left"></i>登出
                    </a>
                </div>
            </div>
        );
    }
}