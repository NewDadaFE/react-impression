import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.any,
}

const NavLink = ({ children, className, ...others }) => {
  if (!children) {
    return children
  }

  let childrenProps = {
    className: classnames('nav-link', children.props.className),
  }

  if (children.type && ['a', 'span', 'div'].indexOf(children.type) === -1) {
    childrenProps.activeClassName = 'active'
  }

  children = React.cloneElement(children, childrenProps)

  return (
    <li {...others} className={classnames('nav-item', className)}>
      {children}
    </li>
  )
}

NavLink.propTypes = propTypes
export default NavLink
