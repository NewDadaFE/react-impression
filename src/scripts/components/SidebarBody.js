import classnames from 'classnames';
import React, { Component } from 'react';
import PS from 'perfect-scrollbar';


/**
 * Sidebar 主内容组件
 */
export default class SidebarBody extends Component{
    componentDidUpdate(){
        PS.initialize(this.refs.container);
    }
    componentDidMount(){
        PS.initialize(this.refs.container);
    }
    render(){
        let { className, children, ...others } = this.props;

        return (
            <div ref="container" {...others} className={classnames('sidebar-body', className)}>
                { children }
            </div>
        );
    }
}
