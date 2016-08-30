import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * NavLink 组件
 */
export default class NavLink extends PureComponent {
    //props校验
    static propTypes ={
        className: PropTypes.string,
        children: PropTypes.element.isRequired,
    }
    //渲染
    render(){
        let { children, className, ...others } = this.props,
            childrenProps = {
                className: classnames('nav-link', children.props.className),
            };

        children.type.displayName === 'Link' && (childrenProps.activeClassName = 'active');
        children = React.cloneElement(children, childrenProps);

        return(
            <li {...others} className={classnames('nav-item', className)}>
                {children}
            </li>
        );
    }
}
