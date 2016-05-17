import classnames from 'classnames';
import React, { Component } from 'react';
import FormGroup from './FormGroup';

/**
 * Form 组件.
 */
export default class Form extends Component{
    //props校验
    static propTypes ={
        //排列方向
        type: React.PropTypes.string,
        //是否分列
        grid: React.PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        type: "inline",
        grid: false,
    }
    //渲染
    render(){
        let { type, grid, className, children } = this.props;
        let typeClass = type? `form-${type}`: null;

        return(
            <form className={classnames(typeClass, {row: grid},className)}>
                { children }
            </form>
        );
    }
}

Form.Group = FormGroup;