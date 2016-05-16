import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Checkbox 组件.
 */
export default class Checkbox extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
        //是否可以点击
        disabled: React.PropTypes.bool,
        //是否默认选中
        defaultChecked: React.PropTypes.bool,
        //是否选中
        checked: React.PropTypes.bool,
        //状态变更回调
        onChange: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //渲染
    render(){
        let { value, checked, defaultChecked, disabled, className, onChange} = this.props;

        return(
            <label className={classnames('checkbox', className)}>
                <input type="checkbox" value={value || this.props.children} disabled={disabled} defaultChecked={defaultChecked} checked={checked} ref="main" onChange={onChange}/>
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