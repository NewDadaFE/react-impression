import classnames from 'classnames';
import React, { PureComponent } from 'react';

/**
 * Dropdown 菜单分割线组件.
 */
export default class DropdownMenuDivider extends PureComponent {
    //渲染
    render(){
        let { className } = this.props;

        return <li className={classnames('dropdown-divider', className)}/>;
    }
}
