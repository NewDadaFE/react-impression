import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TimelineItem from '../TimelineItem'

const propTypes = {
  /**
   * 时间线节点尺寸
   */
  size: PropTypes.oneOf(['lg']),
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

const Timeline = ({ size, className, children, ...others }) => {
  const sizeClass = size ? `timeline-${size}` : null

  return (
    <ul {...others} className={classnames('timeline', sizeClass, className)}>
      {children}
    </ul>
  )
}

Timeline.propTypes = propTypes
Timeline.Item = TimelineItem

export default Timeline
