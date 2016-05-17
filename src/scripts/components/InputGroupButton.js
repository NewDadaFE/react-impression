import classnames from 'classnames';
import React, { Component } from 'react';
import Button from './Button';

/**
 * InputGroupButton组件.
 */
export default class InputGroupButton extends Component{
    //props校验
    static propTypes ={
        style: React.PropTypes.string,
        className: React.PropTypes.string,
    }
    //默认props
    static defaultProps = {
        style: 'primary',
    }
    //渲染
    render(){
        let { style, className, children } = this.props;

        return(
            <span className="input-group-btn">
                <Button style={style} className={classnames(className)}>
                    {children}
                </Button>
            </span>
        );
    }
}