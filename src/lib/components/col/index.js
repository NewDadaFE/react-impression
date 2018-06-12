import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const sizeArray = ['xs', 'sm', 'md', 'lg', 'xl']
/**
 * Col布局组件.
 */
const Col = ({ col, offset, push, pull, children, className, ...others }) => {
  let colClass = `col-${col}`,
    offsetClass = offset ? `offset-${offset}` : null,
    pushClass = push ? `push-${push}` : null,
    pullClass = pull ? `pull-${pull}` : null

  let responsiveClassObj = {}

  sizeArray.forEach(size => {
    let sizeProps = {}

    if (typeof others[size] === 'number' || typeof others[size] === 'string') {
      sizeProps.span = others[size]
    }

    delete others[size]

    responsiveClassObj = {
      ...responsiveClassObj,
      [`col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`offset-${size}-${offset}`]: offset !== undefined,
    }
  })

  return (
    <div
      {...others}
      className={classnames(
        colClass,
        offsetClass,
        pushClass,
        pullClass,
        className,
        responsiveClassObj
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
