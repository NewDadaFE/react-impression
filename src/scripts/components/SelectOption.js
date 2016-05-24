import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * Option组件.
 */
export default class Option extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
    }
    //prop type校验
    static propTypes = {
        //是否不可用
        disabled: React.PropTypes.bool,
        //自定义样式
        className: React.PropTypes.string,
        //是否选中
        active: React.PropTypes.bool,
        //value
        value: React.PropTypes.any.isRequired,
        //回调
        onClick: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        active: false,
    }
    //渲染
    render(){
        let { active, onClick, className, children, ...others } = this.props;

        return(
            <li {...others} className={classnames('select-option', { active, disabled }, className)} onClick={onClick}>
                {children}
            </li>
        );
    }

}