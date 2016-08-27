import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Dropdown 菜单组件.
 */
export default class DropdownMenu extends Component{
    //props类型校验
    static propTypes = {
        right: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        right: false,
    }
    //渲染
    render(){
        let { toggleMenu, right, className, children } = this.props;

        children = React.Children.toArray(children);
        children = children.map((child, index) => {
            return React.cloneElement(child, {
                toggleMenu
            });
        });

        return(
            <div className="dropdown-picker">
                <div className="dropdown-gap"/>
                <ul className={classnames('dropdown-menu', {'dropdown-menu-right': right}, className)}>
                    {children}
                </ul>
            </div>
        );
    }
}
