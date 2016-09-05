import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * FormControlLabel 组件.
 */
export default class FormControlLabel extends PureComponent {
    // props校验
    static propTypes ={
        // 自定义样式
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 渲染
    render() {
        let { children, className, ...others } = this.props;

        return (
            <label {...others} className={classnames('form-control-label', className)}>
                {children}
            </label>
        );
    }
}
