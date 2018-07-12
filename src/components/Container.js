import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Container组件.
 */
const Container = ({ children, className, ...others }) => {
  return (
    <div {...others} className={classnames('container', className)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Container
