import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ separator, children, className, ...others }) => {
  const separatorClass = separator ? `breadcrumb-${separator}` : null

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
      className={classnames('breadcrumb', className, separatorClass)}
    >
      {children}
    </ol>
  )
}

Breadcrumb.propTypes = {
  /**
   * 分割标识，'arrow'或者不传则默认为／
   */
  separator: PropTypes.string,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default Breadcrumb
