import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag, Sidebar, Nav } from '../../components';


/**
 * 侧边栏Sidebar.
 */
export default class AppSidebar extends Component {
    /**
     * 组件渲染.
     */
    render() {
        return (
            <Sidebar>
                <Nav>
                    <Nav.Title>Basic</Nav.Title>
                    <Nav.Link>
                        <Link to="/button"><Icon type="hand-pointer-o" left/>Button<Tag style="primary" className="fa-right">3</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <a href="http://fontawesome.io/icons/" target="_blank"><Icon type="flag" left/>Icon</a>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/image"><Icon type="picture-o" left/>Image</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/table"><Icon type="table" left/>Table</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/layout"><Icon type="columns" left/>Layout</Link>
                    </Nav.Link>
                    <Nav.Title>Form Control</Nav.Title>
                    <Nav.Link>
                        <Link to="/radio"><Icon type="dot-circle-o" left/>Radio</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/checkbox"><Icon type="check-square" left/>Checkbox</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/switch"><Icon type="toggle-on" left/>Switch</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/select"><Icon type="angle-down" left/>Select</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/form"><Icon type="file-text-o" left/>Form<Tag style="danger" className="fa-right">Hot</Tag></Link>
                    </Nav.Link>
                    <Nav.Title>Components</Nav.Title>
                    <Nav.Link>
                        <Link to="/card"><Icon type="television" left/>Card</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/breadcrumb"><Icon type="hand-o-right" left/>Breadcrumb</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/tag"><Icon type="tag" left/>Tag</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/badge"><Icon type="circle" left/>Badge</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/alert"><Icon type="info-circle" left/>Alert<Tag style="warning" className="fa-right">1/4</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/progress"><Icon type="hourglass-start" left/>Progress</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/button-group"><Icon type="th-large" left/>ButtonGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/pagination"><Icon type="angle-double-right" left/>Pagination</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/nav"><Icon type="bars" left/>Nav</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/navbar"><Icon type="tasks" left/>Navbar</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/input-group"><Icon type="outdent" left/>InputGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/list-group"><Icon type="list" left/>ListGroup</Link>
                    </Nav.Link>
                    <div className="nav-collapse hidden">
                        <div><Icon type="list" left/>List-Group<Icon type="angle-right" className="pull-right"/></div>
                        <div className="nav-collapse-block">
                            <Nav.Link>
                                <Link to="/image">Image</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/table">Table</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/button">Button</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/button-group">Button-Group</Link>
                            </Nav.Link>
                        </div>
                    </div>
                    <Nav.Link>
                        <Link to="/modal"><Icon type="file-text" left/>Modal<Tag style="success" className="fa-right">New</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/tooltip"><Icon type="commenting-o" left/>Tooltip</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/popover"><Icon type="comments" left/>Popover</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/dropdown"><Icon type="caret-square-o-down" left/>Dropdown</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/message"><Icon type="bell" left/>Message</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/notification"><Icon type="bullhorn" left/>Notification</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/datepicker"><Icon type="calendar" left/>DatePicker</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/timeline"><Icon type="clock-o" left/>Timeline</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/loading"><Icon type="spinner" left/>Loading</Link>
                    </Nav.Link>
                </Nav>
                <Sidebar.Footer>
                    <Link to="/timeline">
                        <Icon type="question-circle" size="lg" left/>帮助
                    </Link>
                    <Link to="/timeline">
                        <Icon type="power-off" size="lg" left/>登出
                    </Link>
                </Sidebar.Footer>
            </Sidebar>
        );
    }
}