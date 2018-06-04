import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
// props校验
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

/**
 * NavLink 组件
 */
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
