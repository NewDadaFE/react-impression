import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ children, className, ...others }) => {
  children = React.Children.map(children, (child, index) => {
    if (!child) {
      return child
    }

    return (
      <li key={index} className='breadcrumb-item'>
        {child}
      </li>
    )
  })

  return (
    <ol
      {...others}
      className={classnames('breadcrumb breadcrumb-arrow', className)}
    >
      {children}
    </ol>
  )
}

Breadcrumb.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default Breadcrumb
