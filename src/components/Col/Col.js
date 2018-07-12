import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Col布局组件.
 */
const Col = ({ col, offset, push, pull, children, className, ...others }) => {
  let colClass = `col-xs-${col}`,
    offsetClass = offset ? `offset-xs-${offset}` : null,
    pushClass = push ? `push-xs-${push}` : null,
    pullClass = pull ? `pull-xs-${pull}` : null

  return (
    <div
      {...others}
      className={classnames(
        colClass,
        offsetClass,
        pushClass,
        pullClass,
        className
      )}
    >
      {children}
    </div>
  )
}

Col.propTypes = {
  // 所占比例
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  push: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Col
