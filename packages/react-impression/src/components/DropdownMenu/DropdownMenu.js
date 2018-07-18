import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class DropdownMenu extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.any,

    /**
     * 下拉列表靠右
     */
    right: PropTypes.bool,

    /**
     * 切换回调函数
     */
    toggleMenu: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    right: false,
  }
  // 渲染
  render() {
    const { toggleMenu, right, className } = this.props
    let { children } = this.props

    children = React.Children.map(children, child => {
      if (!child) {
        return child
      }

      return React.cloneElement(child, {
        toggleMenu,
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
