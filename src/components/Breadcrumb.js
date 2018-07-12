import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * 面包屑组件.
 */
const Breadcrumb = ({ separator, children, className, ...others }) => {
  let separatorClass = separator ? `breadcrumb-${separator}` : null

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
  // 分隔
  separator: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Breadcrumb
