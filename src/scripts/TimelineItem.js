import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * TimelineItem组件.
 */
export default class TimelineItem extends Component{
    //prop type校验
    static propTypes = {
        className: PropTypes.string,
        //自定义icon
        dot: PropTypes.element,
        //不可达
        unreachable: PropTypes.bool,
    }
    //渲染
    render(){
        let { dot, unreachable, className, children, ...others } = this.props,
            unreachableClass = unreachable? `timeline-item-unreachable` : null;

        return(
            <li {...others} className={classnames('timeline-item', unreachableClass, className)}>
                <div className="timeline-item-line"></div>
                <div className="timeline-item-addon">
                    { dot ? dot : <i className="fa fa-circle-o"></i>}
                </div>
                <div className="timeline-item-body">
                    {children}
                </div>
            </li>
        );
    }
}