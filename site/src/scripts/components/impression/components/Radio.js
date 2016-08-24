import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Radio组件.
 */
export default class Radio extends Component{
    //props校验
    static propTypes = {
        //名称
        name: PropTypes.any,
        //返回值
        value: PropTypes.any,
        //自定义样式
        className: PropTypes.string,
        //是否选中
        checked: PropTypes.bool,
        //默认是否选中
        defaultChecked: PropTypes.bool,
        //是否disabled
        disabled: PropTypes.bool,
        //回调函数
        onChange: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //渲染
    render(){
        let { value, checked, defaultChecked, disabled, className, name, onChange, ...others } = this.props;

        return(
            <label {...others} className={classnames('radio', className)}>
                <input type="radio" name={name} checked={checked} defaultChecked={defaultChecked} disabled={disabled} onChange={event => onChange(event, value)}/>
                <div className="radio-addon">
                    <i></i>
                </div>
                <span className="radio-label">{this.props.children}</span>
            </label>
        );
    }
}
