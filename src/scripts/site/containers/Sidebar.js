import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag, Nav } from '../../components';


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
                    <Nav.Title>BASIC</Nav.Title>
                    <Nav.Link>
                        <Link activeClassName="active" to="/button"><Icon type="hand-pointer-o" left/>Button<Tag style="primary" className="fa-right">3</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/radio"><Icon type="dot-circle-o" left/>Radio</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/checkbox"><Icon type="check-square" left/>Checkbox</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/switch"><Icon type="toggle-on" left/>Switch</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/select"><Icon type="angle-down" left/>Select</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/form"><Icon type="file-text-o" left/>Form<Tag style="danger" className="fa-right">Hot</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/image"><Icon type="picture-o" left/>Image</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/table"><Icon type="table" left/>Table</Link>
                    </Nav.Link>
                    <Nav.Title>COMPONENT</Nav.Title>
                    <Nav.Link>
                        <Link activeClassName="active" to="/card"><Icon type="television" left/>Card</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/breadcrumb"><Icon type="hand-o-right" left/>Breadcrumb</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/tag"><Icon type="tag" left/>Tag</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/alert"><Icon type="info-circle" left/>Alert<Tag style="warning" className="fa-right">1/4</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/progress"><Icon type="hourglass-start" left/>Progress</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/button-group"><Icon type="th-large" left/>ButtonGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/pagination"><Icon type="angle-double-right" left/>Pagination</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/nav"><Icon type="bars" left/>Nav</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/navbar"><Icon type="tasks" left/>Navbar</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/input-group"><Icon type="outdent" left/>InputGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/list-group"><Icon type="list" left/>ListGroup</Link>
                    </Nav.Link>
                    <div className="nav-collapse hidden">
                        <div><Icon type="list" left/>List-Group<Icon type="angle-right" className="pull-right"/></div>
                        <div className="nav-collapse-block">
                            <Nav.Link>
                                <Link activeClassName="active" to="/image">Image</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClassName="active" to="/table">Table</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClassName="active" to="/button">Button</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClassName="active" to="/button-group">Button-Group</Link>
                            </Nav.Link>
                        </div>
                    </div>
                    <Nav.Link>
                        <Link activeClassName="active" to="/modal"><Icon type="file-text" left/>Modal<Tag style="success" className="fa-right">New</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/tooltip"><Icon type="commenting-o" left/>Tooltip</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/popover"><Icon type="comments" left/>Popover</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/dropdown"><Icon type="caret-square-o-down" left/>Dropdown</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/message"><Icon type="bell" left/>Message</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/notification"><Icon type="bullhorn" left/>Notification</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/datepicker"><Icon type="calendar" left/>DatePicker</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/timeline"><Icon type="clock-o" left/>Timeline</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClassName="active" to="/loading"><Icon type="spinner" left/>Loading</Link>
                    </Nav.Link>
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