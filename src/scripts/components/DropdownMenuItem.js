import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Dropdown 菜单项组件.
 */
export default class DropdownMenuItem extends PureComponent {
    //props类型校验
    static propTypes = {
        disabled: PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //点击回调
    onClickHandle = () => {
        let { disabled, onClick, toggleMenu } = this.props;

        !disabled && onClick && onClick();
        toggleMenu();
    }
    //渲染
    render(){
        let { disabled, className, children } = this.props;

        return (
            <li onClick={this.onClickHandle}
                className={classnames('dropdown-item', {disabled}, className)}>
                {children}
            </li>
        );
    }
}
