import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * FormGroup 组件.
 */
export default class FormGroup extends Component{
    //props校验
    static propTypes ={
        //所占比例
        col: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    }
    //渲染
    render(){
        let { col, className, children } = this.props;
        let colClass = col? `col-xs-${col}`: null;

        return(
            <div className={classnames('form-group', colClass, className)}>
                { children }
            </div>
        );
    }
}