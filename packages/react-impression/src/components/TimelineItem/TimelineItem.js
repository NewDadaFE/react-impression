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
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 自定义左侧渲染内容
   */
  Title: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
}

const TimelineItem = ({
  dot,
  unreachable,
  className,
  children,
  Title,
  size,
  ...others
}) => {
  const unreachableClass = unreachable ? 'timeline-item-unreachable' : null
  let content
  if (Title && typeof Title === 'function') {
    content = Title()
  } else if (React.isValidElement(Title)) {
    content = React.cloneElement(Title)
  }

  return (
    <li
      {...others}
      className={classnames('timeline-item', unreachableClass, className)}
    >
      {size === 'lg' && <div className='timeline-item-title'>{content}</div>}
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
