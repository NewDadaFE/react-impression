import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * InlineSelectOption组件.
 */
export default class InlineSelectdOption extends PureComponent {
    // props 校验
    static propTypes = {
        //是否选中
        active: PropTypes.bool,
        //自定义样式
        className: PropTypes.string,
    }
    render(){
        let { active, className, children, ...others } = this.props;

        return <div {...others} className={classnames('inline-select-option', {active}, className)}>{children}</div>;
    }
}
