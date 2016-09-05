import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Switch组件.
 */
export default class Switch extends PureComponent {
    // props校验
    static propTypes = {
        // 自定义class
        className: PropTypes.string,
        // 是否选中
        checked: PropTypes.bool,
        // 是否默认选中
        defaultChecked: PropTypes.bool,
        // 是否disabled
        disabled: PropTypes.bool,
        // 状态切换回调
        onChange: PropTypes.func,
    }
    // 默认props
    static defaultProps = {
        disabled: false,
    }
    // 状态切换回调
    onChangeHandle = event => {
        let { onChange } = this.props,
            { checked } = event.target;

        onChange(checked, event);
    }
    // 渲染
    render() {
        let { checked, defaultChecked, onChange, disabled, className, ...others } = this.props;

        return(
            <label
                {...others}
                className={classnames('switch', className)}
                htmlFor={`switch${this._reactInternalInstance._mountOrder}`}>
                <input
                    ref="main"
                    type="checkbox"
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={onChange && this.onChangeHandle}
                    id={`switch${this._reactInternalInstance._mountOrder}`} />
                <div className="switch-addon" />
            </label>
        );
    }
}

// 获取Swtich是否选中
Switch.getValue = ref => {
    let { value } = ref.props,
        { main } = ref.refs;

    if(!ref) {
        return undefined;
    }

    if(value === undefined) {
        return main.checked;
    }

    return value;
};
