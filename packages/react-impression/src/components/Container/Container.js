import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, className, ...others }) => {
  return (
    <div {...others} className={classnames('container', className)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default Container
