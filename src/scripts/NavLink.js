import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * NavLink 组件
 */
export default class NavLink extends Component{
    //props校验
    static propTypes ={
        className: PropTypes.string,
        children: PropTypes.element.isRequired,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props;
        children = React.cloneElement(children, {
            className: classnames('nav-link', children.props.className),
            activeClassName: children.type.displayName === 'Link' ? 'active' : null
        });

        return(
            <li {...others} className={classnames('nav-item', className)}>
                {children}
            </li>
        );
    }
}