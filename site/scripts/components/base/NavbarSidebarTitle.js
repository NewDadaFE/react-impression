import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * NavbarSidebarTitle 组件
 */
export default class NavbarSidebarTitle extends Component{
    //props校验
    static propTypes ={
        img: PropTypes.string,
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { img, className, children, ...others } = this.props;

        return (
            <div {...others} className={classnames('navbar-sidebar-title', className)}>
                { img && <img src={img}/> }
                { children }
            </div>
        );
    }
}