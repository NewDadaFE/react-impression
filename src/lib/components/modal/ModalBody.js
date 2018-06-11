import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * ModalBody组件.
 */
const ModalBody = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-body', className)}>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
}

export default ModalBody
