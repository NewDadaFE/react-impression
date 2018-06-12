import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DropdownTrigger from './DropdownTrigger'
import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'
import DropdownMenuDivider from './DropdownMenuDivider'
import * as PopManager from '../../utils/pop'

/**
 * Dropdown组件.
 */
export default class Dropdown extends PureComponent {
  constructor(props, context) {
    super(props, context)
    PopManager.manager(this)

    this.state = {
      active: undefined === props.active ? false : props.active,
    }
  }
  // prop type校验
  static propTypes = {
    // 是否激活
    active: PropTypes.bool,
    // 触发动作
    trigger: PropTypes.oneOf(['click', 'hover']),
    // 子节点
    children: PropTypes.array.isRequired,
    className: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    active: false,
    trigger: 'click',
  }
  // 显示/隐藏菜单
  toggleOptionsHandle = flag => {
    let { active } = this.state

    this.setState({
      active: typeof flag === 'boolean' ? flag : !active,
    })
  }
  // 隐藏菜单
  hideOptionsHandle = () => {
    this.setState({
      active: false,
    })
  }
  // 清空组件管理.
  componentWillUnmount() {
    PopManager.unManager(this)
  }
  // 渲染
  render() {
    let { trigger, className, children, ...others } = this.props,
      { active } = this.state

    children = React.Children.map(children, child => {
      if (!child) {
        return child
      }

      return React.cloneElement(child, {
        trigger,
        toggleMenu: this.toggleOptionsHandle,
      })
    })

    if (trigger === 'hover') {
      others.onMouseOver = () => this.toggleOptionsHandle(true)
      others.onMouseOut = () => this.toggleOptionsHandle(false)
    }

    delete others.active

    return (
      <div
        {...others}
        className={classnames('dropdown', { active }, className)}
      >
        {children}
      </div>
    )
  }
}

Dropdown.Trigger = DropdownTrigger
Dropdown.Menu = DropdownMenu
Dropdown.MenuItem = DropdownMenuItem
Dropdown.MenuDivider = DropdownMenuDivider
