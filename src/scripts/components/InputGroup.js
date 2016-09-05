import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';
import InputGroupAddon from './InputGroupAddon';
import InputGroupInput from './InputGroupInput';
import InputGroupButton from './InputGroupButton';

/**
 * InputGroup组件.
 */
export default class InputGroup extends PureComponent {
    // props校验
    static propTypes ={
        size: PropTypes.oneOf(['sm', 'lg']),
        className: PropTypes.string,
        children: PropTypes.any,
    }
    // 渲染
    render() {
        let { size, className, children, ...others } = this.props,
            sizeClass = size ? `input-group-${size}` : null;

        return(
            <div {...others} className={classnames('input-group', sizeClass, className)}>
                {children}
            </div>
        );
    }
}

InputGroup.Addon = InputGroupAddon;
InputGroup.Input = InputGroupInput;
InputGroup.Button = InputGroupButton;
