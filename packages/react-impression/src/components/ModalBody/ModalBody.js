import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const ModalBody = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-body', className)}>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default ModalBody
