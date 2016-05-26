import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import TimelineItem from './TimelineItem';

/**
 * Timeline组件.
 */
export default class Timeline extends Component{
    //prop type校验
    static propTypes = {
        className: PropTypes.string,
        //大小
        size: PropTypes.oneOf(['lg']),
    }
    //渲染
    render(){
        let { size, className, children, ...others } = this.props,
            sizeClass = size? `timeline-${size}` : null;

        return(
            <ul {...others} className={classnames('timeline', sizeClass, className)}>
                {children}
            </ul>
        );
    }
}

Timeline.Item = TimelineItem;