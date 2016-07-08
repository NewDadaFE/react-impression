import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * CardFooter组件.
 */
export default class CardFooter extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
           <div {...others} className={classnames('card-footer', className)}>
                {children}
           </div>
        );
    }
}