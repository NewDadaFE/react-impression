import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Dropdown 菜单组件.
 */
export default class DropdownMenu extends PureComponent {
  // props类型校验
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    right: PropTypes.bool,
    toggleMenu: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    right: false,
  }
  // 渲染
  render() {
    let { toggleMenu, right, className, children } = this.props

    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      return React.cloneElement(child, {
        toggleMenu,
        key: index,
      })
    })

    return (
      <div className='dropdown-picker'>
        <div className='dropdown-gap' />
        <ul
          className={classnames(
            'dropdown-menu',
            { 'dropdown-menu-right': right },
            className
          )}
        >
          {children}
        </ul>
      </div>
    )
  }
}
