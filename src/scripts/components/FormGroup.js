import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * FormGroup 组件.
 */
export default class FormGroup extends Component{
    //props校验
    static propTypes ={
        //所占比例
        col: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { col, className, children, ...others } = this.props,
            colClass = col? `col-xs-${col}`: null;

        return(
            <div {...others} className={classnames('form-group', colClass, className)}>
                { children }
            </div>
        );
    }
}