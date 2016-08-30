import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * CollapseBody 组件
 */
export default class CollapseBody extends PureComponent{
    //props校验
    static propTypes ={
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        delete others.onClick;
        return(
            <div {...others} className={classnames('collapse-body', className)}>
                {children}
            </div>
        );
    }
}
