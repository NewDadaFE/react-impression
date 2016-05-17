import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * CardFooter组件.
 */
export default class CardFooter extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
    }
    //渲染
    render(){
        let { className, children } = this.props;

        return(
           <div className={classnames('card-footer', className)}>
                {children}
           </div>
        );
    }
}