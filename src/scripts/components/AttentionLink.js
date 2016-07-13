import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * AttentionLink 组件
 */
export default class AttentionLink extends Component{
    // props 校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //超链接
        href: PropTypes.string,
    }
    render(){
        let { href, className, children, ...others } = this.props;

        return(
            <a {...others} href={href} className={classnames('attention-link', className)}>{children}</a>
        );
    }
}