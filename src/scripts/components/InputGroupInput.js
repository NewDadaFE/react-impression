import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
// import InputGroupAddon from './InputGroupAddon';

/**
 * InputGroup组件.
 */
export default class InputGroupInput extends Component{
    //props校验
    static propTypes ={
        type: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        type: 'text',
    }
    //渲染
    render(){
        let { className, placeholder, ...others } = this.props;

        return(
            <input {...others} type="text" className={classnames('form-control', className)} placeholder={placeholder} ref="main"/>
        );
    }
}