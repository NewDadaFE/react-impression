import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * AttentionLink 组件
 */
const propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 超链接
  href: PropTypes.string,
}

const AttentionLink = ({ href, className, children, ...others }) => {
  return (
    <a
      {...others}
      href={href}
      className={classnames('attention-link', className)}
    >
      {children}
    </a>
  )
}

AttentionLink.propTypes = propTypes

export default AttentionLink
