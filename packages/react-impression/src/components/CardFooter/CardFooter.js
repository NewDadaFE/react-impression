import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * CardFooter组件.
 */
const CardFooter = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('card-footer', className)}>
      {children}
    </div>
  )
}

CardFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default CardFooter
