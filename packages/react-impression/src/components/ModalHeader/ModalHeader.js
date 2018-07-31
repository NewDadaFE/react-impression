import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const ModalHeader = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-header', className)}>
      {children}
    </div>
  )
}

ModalHeader.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default ModalHeader
