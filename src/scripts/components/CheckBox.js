import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Checkbox 组件.
 */
export default class Checkbox extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //是否可以点击
        disabled: PropTypes.bool,
        //是否默认选中
        defaultChecked: PropTypes.bool,
        //是否选中
        checked: PropTypes.bool,
        //状态变更回调
        onChange: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //渲染
    render(){
        let { value, checked, defaultChecked, disabled, className, onChange, ...others } = this.props;

        return(
            <label {...others} className={classnames('checkbox', className)}>
                <input type="checkbox" value={value || this.props.children} disabled={disabled} defaultChecked={defaultChecked} checked={checked} ref="main" onChange={onChange} />
                <div className="checkbox-addon">
                    <i className="fa fa-check"></i>
                </div>
                <span className="checkbox-label">
                    {this.props.children}
                </span>
            </label>
        );
    }
}