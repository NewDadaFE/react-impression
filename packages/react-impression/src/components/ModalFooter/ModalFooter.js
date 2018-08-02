import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const ModalFooter = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('modal-footer', className)}>
      {children}
    </div>
  )
}

ModalFooter.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default ModalFooter
