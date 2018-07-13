import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * CardHeader组件.
 */
const CardHeader = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('card-header', className)}>
      {children}
    </div>
  )
}

CardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
export default CardHeader
