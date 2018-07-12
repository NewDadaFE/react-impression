import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * CardBlock组件.
 */
const CardBlock = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('card-block', className)}>
      {children}
    </div>
  )
}

CardBlock.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default CardBlock
