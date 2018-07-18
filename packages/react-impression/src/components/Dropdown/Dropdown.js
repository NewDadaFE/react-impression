import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import DropdownTrigger from '../DropdownTrigger'
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenuItem'
import DropdownMenuDivider from '../DropdownMenuDivider'
import * as System from '../../utils/system'

export default class Dropdown extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    System.manager(this)

    this.state = {
      active: undefined === props.active ? false : props.active,
    }
  }

  static propTypes = {
    /**
     * 是否激活
     */
    active: PropTypes.bool,

    /**
     * 触发动作
     */
    trigger: PropTypes.oneOf(['click', 'hover']),

    /**
     * 子组件
     */
    children: PropTypes.array.isRequired,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    active: false,
    trigger: 'click',
  }

  toggleOptionsHandle = flag => {
    let { active } = this.state

    this.setState({
      active: typeof flag === 'boolean' ? flag : !active,
    })
  }

  hideOptionsHandle = () => {
    this.setState({
      active: false,
    })
  }

  componentWillUnmount() {
    System.unmanager(this)
  }
  // 渲染
  render() {
    const { trigger, className, ...others } = this.props
    const { active } = this.state
    let { children } = this.props

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
