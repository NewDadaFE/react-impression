import classnames from 'classnames'
import React, { useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.node,
}

const NavLink = forwardRef(({ children, className, ...others }, ref) => {
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

  useEffect(() => {
    console.warn('ReactImpression: NavLink组件即将被废弃，请尽快替换！')
  }, [])

  return (
    <li {...others} className={classnames('nav-item', className)} ref={ref}>
      {children}
    </li>
  )
})

NavLink.propTypes = propTypes
export default NavLink
