import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * FormControlLabel 组件.
 */
const FormControlLabel = ({ children, className, ...others }) => {
    return (
        <label {...others} className={classnames('form-control-label', className)}>
            {children}
        </label>
    );
};

FormControlLabel.propTypes = {
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
};

export default FormControlLabel;
