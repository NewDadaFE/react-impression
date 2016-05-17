import classnames from 'classnames';
import React, { Component, cloneElement } from 'react';

/**
 * NavbarBrand 组件
 */
export default class NavbarBrand extends Component{
    //props校验
    static propTypes ={
        href: React.PropTypes.string,
    }
    //渲染
    render(){
        let { href, className, children } = this.props;

        return (
            <a className={classnames('navbar-brand', className)} href={ href || '#' }>{children}</a>
        );
    }
}