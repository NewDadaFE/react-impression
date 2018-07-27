import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /**
   * 自定义icon
   */
  dot: PropTypes.element,
  /**
   * 是否可到达
   */
  unreachable: PropTypes.bool,
  /**
   * 子组件
   */
  children: PropTypes.any,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

const TimelineItem = ({ dot, unreachable, className, children, ...others }) => {
  const unreachableClass = unreachable ? 'timeline-item-unreachable' : null

  return (
    <li
      {...others}
      className={classnames('timeline-item', unreachableClass, className)}
    >
      <div className='timeline-item-line' />
      <div className='timeline-item-addon'>
        {dot || <i className='fa fa-circle-o' />}
      </div>
      <div className='timeline-item-body'>{children}</div>
    </li>
  )
}

TimelineItem.propTypes = propTypes

export default TimelineItem
