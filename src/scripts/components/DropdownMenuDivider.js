import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Dropdown 菜单分割线组件.
 */
export default class DropdownMenuDivider extends Component{
    //渲染
    render(){
        let { className } = this.props;

        return <li className={classnames('dropdown-divider', className)}/>;
    }
}
