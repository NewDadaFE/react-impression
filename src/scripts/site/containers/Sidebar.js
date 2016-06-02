import classnames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag } from '../../components';


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
                    <div className="nav-item">BASIC</div>
                    <Link activeClassName="active" className='nav-link' to="/button"><Icon type="hand-pointer-o" left/>Button<Tag style="primary" className="fa-right">3</Tag></Link>
                    <Link activeClassName="active" className='nav-link' to="/radio"><Icon type="dot-circle-o" left/>Radio</Link>
                    <Link activeClassName="active" className='nav-link' to="/checkbox"><Icon type="check-square" left/>Checkbox</Link>
                    <Link activeClassName="active" className='nav-link' to="/switch"><Icon type="toggle-on" left/>Switch</Link>
                    <Link activeClassName="active" className='nav-link' to="/select"><Icon type="angle-down" left/>Select</Link>
                    <Link activeClassName="active" className='nav-link' to="/form"><Icon type="file-text-o" left/>Form<Tag style="danger" className="fa-right">Hot</Tag></Link>
                    <Link activeClassName="active" className='nav-link' to="/image"><Icon type="picture-o" left/>Image</Link>
                    <Link activeClassName="active" className='nav-link' to="/table"><Icon type="table" left/>Table</Link>
                    <div className="nav-item">COMPONENT</div>
                    <Link activeClassName="active" className='nav-link' to="/card"><Icon type="television" left/>Card</Link>
                    <Link activeClassName="active" className='nav-link' to="/breadcrumb"><Icon type="hand-o-right" left/>Breadcrumb</Link>
                    <Link activeClassName="active" className='nav-link' to="/tag"><Icon type="tag" left/>Tag</Link>
                    <Link activeClassName="active" className='nav-link' to="/alert"><Icon type="info-circle" left/>Alert<Tag style="warning" className="fa-right">1/4</Tag></Link>
                    <Link activeClassName="active" className='nav-link' to="/progress"><Icon type="hourglass-start" left/>Progress</Link>
                    <Link activeClassName="active" className='nav-link' to="/button-group"><Icon type="th-large" left/>ButtonGroup</Link>
                    <Link activeClassName="active" className='nav-link' to="/pagination"><Icon type="angle-double-right" left/>Pagination</Link>
                    <Link activeClassName="active" className='nav-link' to="/nav"><Icon type="bars" left/>Nav</Link>
                    <Link activeClassName="active" className='nav-link' to="/navbar"><Icon type="tasks" left/>Navbar</Link>
                    <Link activeClassName="active" className='nav-link' to="/input-group"><Icon type="outdent" left/>InputGroup</Link>
                    <Link activeClassName="active" className='nav-link' to="/list-group"><Icon type="list" left/>ListGroup</Link>
                    <div className="nav-collapse">
                        <div className='nav-link'><Icon type="list" left/>List-Group<Icon type="angle-right" className="pull-right"/></div>
                        <div className="nav-collapse-block">
                            <Link activeClassName="active" className='nav-link' to="/image">Image</Link>
                            <Link activeClassName="active" className='nav-link' to="/table">Table</Link>
                            <Link activeClassName="active" className='nav-link' to="/button">Button</Link>
                            <Link activeClassName="active" className='nav-link' to="/button-group">Button-Group</Link>
                        </div>
                    </div>
                    <Link activeClassName="active" className='nav-link' to="/modal"><Icon type="file-text" left/>Modal<Tag style="success" className="fa-right">New</Tag></Link>
                    <Link activeClassName="active" className='nav-link' to="/tooltip"><Icon type="commenting-o" left/>Tooltip</Link>
                    <Link activeClassName="active" className='nav-link' to="/popover"><Icon type="comments" left/>Popover</Link>
                    <Link activeClassName="active" className='nav-link' to="/dropdown"><Icon type="caret-square-o-down" left/>Dropdown</Link>
                    <Link activeClassName="active" className='nav-link' to="/message"><Icon type="bell" left/>Message</Link>
                    <Link activeClassName="active" className='nav-link' to="/notification"><Icon type="bullhorn" left/>Notification</Link>
                    <Link activeClassName="active" className='nav-link' to="/datepicker"><Icon type="calendar" left/>DatePicker</Link>
                    <Link activeClassName="active" className='nav-link' to="/timeline"><Icon type="clock-o" left/>Timeline</Link>
                    <Link activeClassName="active" className='nav-link' to="/loading"><Icon type="spinner" left/>Loading</Link>
                </div>
                <div className="sidebar-footer">
                    <a href="javascript:void(0)" className="sidebar-footer-item">
                        <Icon type="question-circle" size="lg" left/>帮助
                    </a>
                    <a href="javascript:void(0)" className="sidebar-footer-item">
                        <Icon type="power-off" size="lg" left/>登出
                    </a>
                </div>
            </div>
        );
    }
}