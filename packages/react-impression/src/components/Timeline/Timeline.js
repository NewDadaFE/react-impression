import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import TimelineItem from '../TimelineItem'

const propTypes = {
  // 大小
  size: PropTypes.oneOf(['lg']),
  children: PropTypes.any,
  className: PropTypes.string,
}

/**
 * Timeline组件.
 */
const Timeline = ({ size, className, children, ...others }) => {
  let sizeClass = size ? `timeline-${size}` : null

  return (
    <ul {...others} className={classnames('timeline', sizeClass, className)}>
      {children}
    </ul>
  )
}

Timeline.propTypes = propTypes
Timeline.Item = TimelineItem

export default Timeline
