import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import Icon from './Icon';

/**
 * Dropdown 触发组件.
 */
export default class DropdownTrigger extends PureComponent {
    //prop type校验
    static propTypes = {
        //子节点
        children: PropTypes.element.isRequired,
    }
    //渲染
    render(){
        let { trigger, toggleMenu, className, children, ...others } = this.props,
            options = {};

        if(trigger === 'click'){
            options.onClick = toggleMenu;
        }

        children = React.cloneElement(children, options, (
            <span>
                {children.props.children}
                <Icon className="dropdown-caret" right type="caret-down"/>
            </span>
        ));

        return(
            <span {...others} className={classnames('dropdown-toggle', className)}>
                { children }
            </span>
        );
    }

}
