import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavTitle from './NavTitle'

// 返回type映射的class
const getTypeClassMap = type => {
  let map = {
    line: 'nav-line',
    tab: 'nav-tabs',
    pill: 'nav-pills',
    inline: 'nav-inline',
    'inline-bordered': 'nav-inline nav-inline-bordered',
  }

  return map[type] ? map[type] : type
}

/**
 * Nav 组件
 */
export default class Nav extends PureComponent {
  // 构造函数
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: this.props.defaultActiveKey,
    }
  }
  // props校验
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
    stacked: PropTypes.bool,
    defaultActiveKey: PropTypes.any,
    onSelect: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    stacked: false,
  }
  // 选中回调
  onSelectHandle = eventKey => {
    let { activeKey } = this.state,
      { onSelect } = this.props

    if (activeKey === eventKey) {
      return false
    }
    this.setState({ activeKey: eventKey })
    onSelect && onSelect(eventKey)

    return true
  }
  // 渲染
  render() {
    let { type, stacked, className, children, ...others } = this.props,
      { activeKey } = this.state,
      navStacked = stacked && type === 'pill' ? 'nav-stacked' : null,
      navStyle = getTypeClassMap(type)

    delete others.defaultActiveKey
    type &&
      (children = React.Children.map(children, (child, index) => {
        if (!child) {
          return child
        }

        let { eventKey } = child.props,
          options = {
            key: index,
            onClick: this.onSelectHandle,
          }

        if (eventKey !== undefined) {
          options.eventKey = eventKey
          options.active = eventKey === activeKey
        }

        return React.cloneElement(child, options)
      }))

    return (
      <ul
        {...others}
        className={classnames('nav', navStacked, navStyle, className)}
      >
        {children}
      </ul>
    )
  }
}

Nav.Item = NavItem
Nav.Link = NavLink
Nav.Title = NavTitle
