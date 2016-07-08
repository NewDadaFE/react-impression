import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import InputGroupAddon from './InputGroupAddon';
import InputGroupInput from './InputGroupInput';
import InputGroupButton from './InputGroupButton';

/**
 * InputGroup组件.
 */
export default class InputGroup extends Component{
    //props校验
    static propTypes ={
        size: PropTypes.oneOf(['sm', 'lg']),
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { size, className, children, ...others } = this.props,
            sizeClass = size? `input-group-${size}`: null;

        return(
            <div {...others} className={classnames('input-group', sizeClass, className)}>
                {children}
            </div>
        );
    }
}

InputGroup.Addon  = InputGroupAddon;
InputGroup.Input  = InputGroupInput;
InputGroup.Button = InputGroupButton;