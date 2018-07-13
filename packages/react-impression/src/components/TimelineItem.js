import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  // 自定义icon
  dot: PropTypes.element,
  // 不可达
  unreachable: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
}

/**
 * TimelineItem组件.
 */
const TimelineItem = ({ dot, unreachable, className, children, ...others }) => {
  let unreachableClass = unreachable ? 'timeline-item-unreachable' : null

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
