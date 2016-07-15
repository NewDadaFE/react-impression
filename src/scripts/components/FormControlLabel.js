import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * FormControlLabel 组件.
 */
export default class FormControlLabel extends Component{
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return <label {...others} className={classnames('form-control-label', className)}>{children}</label>
    }
}
