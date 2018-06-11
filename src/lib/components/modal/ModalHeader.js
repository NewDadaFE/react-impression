import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * ModalHeader组件.
 */
const ModalHeader = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-header', className)}>
      {children}
    </div>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default ModalHeader
