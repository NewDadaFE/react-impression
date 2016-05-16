import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Radio组件.
 */
export default class Radio extends Component{
    //props校验
    static propTypes = {
        //名称
        name: React.PropTypes.any,
        //返回值
        value: React.PropTypes.any,
        //自定义样式
        className: React.PropTypes.string,
        //是否选中
        checked: React.PropTypes.bool,
        //默认是否选中
        defaultChecked: React.PropTypes.bool,
        //是否disabled
        disabled: React.PropTypes.bool,
        //回调函数
        onChange: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
    }
    //渲染
    render(){
        let { value, checked, defaultChecked, disabled, className, name, onChange } = this.props;

        return(
            <label className={classnames('radio', className)}>
                <input type="radio" value={value} name={name} checked={checked} defaultChecked={defaultChecked} disabled={disabled} onChange={onChange}/>
                <div className="radio-addon">
                    <i></i>
                </div>
                <span className="radio-label">{this.props.children}</span>
            </label>
        );
    }
}