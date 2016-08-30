import classnames from 'classnames';
import React, { PureComponent } from 'react';

/**
 * FormControlLabel 组件.
 */
export default class FormControlLabel extends PureComponent {
    //渲染
    render(){
        let { children, className, ...others } = this.props;

        return <label {...others} className={classnames('form-control-label', className)}>{children}</label>;
    }
}
