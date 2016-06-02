import classnames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag } from '../../components';


/**
 * 侧边栏Sidebar.
 */
export default class Sidebar extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {};
        this.onHashChangeHandle = this.onHashChangeHandle.bind(this);
    }
    componentDidMount(){
        this.onHashChangeHandle();
        window.onhashchange = this.onHashChangeHandle;
    }
    onHashChangeHandle(){
        let hash = location.hash,
            path = hash.substring(2, hash.indexOf('?'));
        path = path? path : 'button';
        this.setState({
            path
        });
    }
    /**
     * 组件渲染.
     */
    render() {
        let { path } = this.state;

        return (
            <div className="sidebar">
                <div className="sidebar-nav">
                    <div className="nav-item">
                        BASIC
                    </div>
                    <Link className={classnames('nav-link', {active: path === 'button'})} to="/button"><Icon type="hand-pointer-o" left/>Button<Tag style="primary" className="fa-right">3</Tag></Link>
                    <Link className={classnames('nav-link', {active: path === 'radio'})} to="/radio"><Icon type="dot-circle-o" left/>Radio</Link>
                    <Link className={classnames('nav-link', {active: path === 'checkbox'})} to="/checkbox"><Icon type="check-square" left/>Checkbox</Link>
                    <Link className={classnames('nav-link', {active: path === 'switch'})} to="/switch"><Icon type="toggle-on" left/>Switch</Link>
                    <Link className={classnames('nav-link', {active: path === 'select'})} to="/select"><Icon type="angle-down" left/>Select</Link>
                    <Link className={classnames('nav-link', {active: path === 'form'})} to="/form"><Icon type="file-text-o" left/>Form<Tag style="danger" className="fa-right">Hot</Tag></Link>
                    <Link className={classnames('nav-link', {active: path === 'image'})} to="/image"><Icon type="picture-o" left/>Image</Link>
                    <Link className={classnames('nav-link', {active: path === 'table'})} to="/table"><Icon type="table" left/>Table</Link>
                    <div className="nav-item">
                        COMPONENT
                    </div>
                    <Link className={classnames('nav-link', {active: path === 'card'})} to="/card"><Icon type="television" left/>Card</Link>
                    <Link className={classnames('nav-link', {active: path === 'breadcrumb'})} to="/breadcrumb"><Icon type="hand-o-right" left/>Breadcrumb</Link>
                    <Link className={classnames('nav-link', {active: path === 'tag'})} to="/tag"><Icon type="tag" left/>Tag</Link>
                    <Link className={classnames('nav-link', {active: path === 'alert'})} to="/alert"><Icon type="info-circle" left/>Alert<Tag style="warning" className="fa-right">1/4</Tag></Link>
                    <Link className={classnames('nav-link', {active: path === 'progress'})} to="/progress"><Icon type="hourglass-start" left/>Progress</Link>
                    <Link className={classnames('nav-link', {active: path === 'button-group'})} to="/button-group"><Icon type="th-large" left/>ButtonGroup</Link>
                    <Link className={classnames('nav-link', {active: path === 'pagination'})} to="/pagination"><Icon type="angle-double-right" left/>Pagination</Link>
                    <Link className={classnames('nav-link', {active: path === 'nav'})} to="/nav"><Icon type="bars" left/>Nav</Link>
                    <Link className={classnames('nav-link', {active: path === 'navbar'})} to="/navbar"><Icon type="tasks" left/>Navbar</Link>
                    <Link className={classnames('nav-link', {active: path === 'input-group'})} to="/input-group"><Icon type="outdent" left/>InputGroup</Link>
                    <Link className={classnames('nav-link', {active: path === 'list-group'})} to="/list-group"><Icon type="list" left/>ListGroup</Link>
                    <div className="nav-collapse">
                        <div className={classnames('nav-link', {active: path === ''})}><Icon type="list" left/>List-Group<Icon type="angle-right" className="pull-right"/></div>
                        <div className="nav-collapse-block">
                            <Link className={classnames('nav-link', {active: path === ''})} to="/image">Image</Link>
                            <Link className={classnames('nav-link', {active: path === ''})} to="/table">Table</Link>
                            <Link className={classnames('nav-link', {active: path === ''})} to="/button">Button</Link>
                            <Link className={classnames('nav-link', {active: path === ''})} to="/button-group">Button-Group</Link>
                        </div>
                    </div>
                    <Link className={classnames('nav-link', {active: path === 'modal'})} to="/modal"><Icon type="file-text" left/>Modal<Tag style="success" className="fa-right">New</Tag></Link>
                    <Link className={classnames('nav-link', {active: path === 'tooltip'})} to="/tooltip"><Icon type="commenting-o" left/>Tooltip</Link>
                    <Link className={classnames('nav-link', {active: path === 'popover'})} to="/popover"><Icon type="comments" left/>Popover</Link>
                    <Link className={classnames('nav-link', {active: path === 'dropdown'})} to="/dropdown"><Icon type="caret-square-o-down" left/>Dropdown</Link>
                    <Link className={classnames('nav-link', {active: path === 'message'})} to="/message"><Icon type="bell" left/>Message</Link>
                    <Link className={classnames('nav-link', {active: path === 'notification'})} to="/notification"><Icon type="bullhorn" left/>Notification</Link>
                    <Link className={classnames('nav-link', {active: path === 'datepicker'})} to="/datepicker"><Icon type="calendar" left/>DatePicker</Link>
                    <Link className={classnames('nav-link', {active: path === 'timeline'})} to="/timeline"><Icon type="clock-o" left/>Timeline</Link>
                    <Link className={classnames('nav-link', {active: path === 'loading'})} to="/loading"><Icon type="spinner" left/>Loading</Link>
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