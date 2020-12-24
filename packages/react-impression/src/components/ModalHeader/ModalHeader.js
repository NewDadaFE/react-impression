import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const ModalHeader = ({ className, children, addonAfter, ...others }) => {
  return (
    <div {...others} className={classnames('modal-header', className)}>
      {children}
      {addonAfter && (
        <div className='dada-modal-header-addon'>{addonAfter}</div>
      )}
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
  /**
   * 右侧附加元件
   */
  addonAfter: PropTypes.element,
}

export default ModalHeader
