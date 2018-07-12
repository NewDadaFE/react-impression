import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * ModalFooter组件.
 */
const ModalFooter = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-footer', className)}>
      {children}
    </div>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default ModalFooter
