import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Icon组件.
 */
export default class Icon extends Component{
    //prop type校验
    static propTypes = {
        type: PropTypes.string,
    }
    //渲染
    render(){
        let { type, className, ...others } = this.props,
            typeClass = `fa-${type}`;

        return(
           <i {...others} className={classnames('fa', typeClass, className)}></i>
        );
    }
}