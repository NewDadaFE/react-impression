import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * NavbarSidebarTitle 组件
 */
export default class NavbarSidebarTitle extends Component{
    //props校验
    static propTypes ={
        img: React.PropTypes.string,
    }
    //渲染
    render(){
        let { img, className, children } = this.props;

        return (
            <div className={classnames('navbar-sidebar-title', className)}>
                { img && <img src={img}/> }
                { children }
            </div>
        );
    }
}