import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag, Sidebar, Nav } from '../components/base';


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
                        <Link to="/button"><Icon type="hand-pointer-o" left/>Button<Tag style="primary" className="offset-r">3</Tag></Link>
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
                        <Link to="/input"><Icon type="search" left/>Input</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/form"><Icon type="file-text-o" left/>Form<Tag style="danger" className="offset-r">Hot</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/input-group"><Icon type="outdent" left/>InputGroup</Link>
                    </Nav.Link>
                    <Nav.Title>Navigation</Nav.Title>
                    <Nav.Link>
                        <Link to="/nav"><Icon type="bars" left/>Nav</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/navbar"><Icon type="tasks" left/>Navbar</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/breadcrumb"><Icon type="hand-o-right" left/>Breadcrumb</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/pagination"><Icon type="angle-double-right" left/>Pagination</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/inline-select"><Icon type="th" left/>InlineSelect</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/timeline"><Icon type="clock-o" left/>Timeline</Link>
                    </Nav.Link>
                    <Nav.Title>Prompt</Nav.Title>
                    <Nav.Link>
                        <Link to="/attention"><Icon type="info-circle" left/>Attention<Tag style="warning" className="offset-r">1/4</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/tooltip"><Icon type="commenting-o" left/>Tooltip</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/popover"><Icon type="comments" left/>Popover</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/alert"><Icon type="exclamation-triangle" left/>Alert</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/message"><Icon type="bell" left/>Message</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/notification"><Icon type="bullhorn" left/>Notification</Link>
                    </Nav.Link>
                    <Nav.Title>Components</Nav.Title>
                    <Nav.Link>
                        <Link to="/card"><Icon type="television" left/>Card</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/tag"><Icon type="tag" left/>Tag</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/badge"><Icon type="circle" left/>Badge</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/progress"><Icon type="hourglass-start" left/>Progress</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/button-group"><Icon type="th-large" left/>ButtonGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/list-group"><Icon type="list" left/>ListGroup</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/modal"><Icon type="file-text" left/>Modal<Tag style="success" className="offset-r">New</Tag></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/confirm"><Icon type="question-circle" left/>Confirm</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/dropdown"><Icon type="caret-square-o-down" left/>Dropdown</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/datepicker"><Icon type="calendar" left/>DatePicker</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/calendar"><Icon type="calendar-check-o" left/>Calendar</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/loading"><Icon type="spinner" left/>Loading</Link>
                    </Nav.Link>
                    <Nav.Title>Others</Nav.Title>
                    <Nav.Collapse>
                        <Nav.Collapse.Title>
                            <Icon type="bars" left/>Other Pages
                        </Nav.Collapse.Title>
                        <Nav.Link>
                            <Link to="/button">Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <a href="http://fontawesome.io/icons/" target="_blank">500</a>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/image">404</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/table">Lock</Link>
                        </Nav.Link>
                    </Nav.Collapse>
                </Nav>
                <Sidebar.Footer>
                    <Link to="/timeline">
                        <Icon type="question-circle" size="lg" left/>help
                    </Link>
                    <Link to="/timeline">
                        <Icon type="power-off" size="lg" left/>logout
                    </Link>
                </Sidebar.Footer>
            </Sidebar>
        );
    }
}