import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Dropdown 菜单分割线组件.
 */
export default class DropdownMenuDivider extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    }
    // 渲染
    render() {
        let { className } = this.props;

        return <li className={classnames('dropdown-divider', className)} />;
    }
}
