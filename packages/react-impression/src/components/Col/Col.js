import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const Col = ({ col, offset, push, pull, children, className, ...others }) => {
  const colClass = `col-xs-${col}`
  const offsetClass = offset ? `offset-xs-${offset}` : null
  const pushClass = push ? `push-xs-${push}` : null
  const pullClass = pull ? `pull-xs-${pull}` : null

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
  /**
   * 所占比例，''或[1, 12]
   */
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 左侧外边距，[0, 11]
   */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 左侧偏移量，[0, 12]
   */
  push: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 右侧偏移量，[0, 12]
   */
  pull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default Col
