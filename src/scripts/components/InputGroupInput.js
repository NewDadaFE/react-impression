import classnames from 'classnames';
import React, { Component } from 'react';
import InputGroupAddon from './InputGroupAddon';

/**
 * InputGroup组件.
 */
export default class InputGroupInput extends Component{
    //props校验
    static propTypes ={
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        className: React.PropTypes.string,
    }
    //默认props
    static defaultProps = {
        type: 'text',
    }
    //渲染
    render(){
        let { className, children, placeholder } = this.props;

        return(
            <input type="text" className={classnames('form-control', className)} placeholder={placeholder} ref="main"/>
        );
    }
}