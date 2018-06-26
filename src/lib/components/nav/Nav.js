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
      activeKey:
        props.activeKey !== undefined
          ? props.activeKey
          : props.defaultActiveKey,
      barStyle: props.type !== 'line' ? { display: 'none' } : {},
      tabs: [],
    }
  }
  // props校验
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
    stacked: PropTypes.bool,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    onSelect: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    stacked: false,
  }

  getChildContext() {
    return {
      componentNav: this,
    }
  }

  componentDidMount() {
    this.calculateBarStyle()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState(
        {
          activeKey: nextProps.activeKey,
        },
        () => this.calculateBarStyle()
      )
    }
  }

  onItemCreate(option) {
    this.state.tabs.push(option)
  }

  onItemDestroy(option) {
    const { tabs } = this.state

    const index = tabs.indexOf(option)
    if (index > -1) {
      tabs.splice(index, 1)
    }
  }

  // 选中回调
  onSelectHandle = eventKey => {
    let { activeKey } = this.state,
      { onSelect } = this.props

    if (activeKey === eventKey) {
      return false
    }
    this.setState({ activeKey: eventKey }, () => {
      this.calculateBarStyle()
      onSelect && onSelect(eventKey)
    })

    return true
  }
  // 改变底部bar的位置
  calculateBarStyle() {
    const { type } = this.props
    const { tabs, activeKey, barStyle } = this.state

    if (type !== 'line' || !tabs.length) return

    let style = { ...barStyle }
    let offset = 0
    let tabWidth = 0

    tabs.every(item => {
      let eventKey = (item.node.props && item.node.props.eventKey) || undefined
      if (eventKey !== activeKey) {
        offset += item.ref.clientWidth
        return true
      } else {
        tabWidth = item.ref.clientWidth
        return false
      }
    })

    style.width = tabWidth + 'px'
    style.transform = `translateX(${offset}px)`

    this.setState({
      barStyle: style,
    })
  }

  // 渲染
  render() {
    let { type, stacked, className, children, ...others } = this.props,
      { activeKey, barStyle } = this.state,
      navStacked = stacked && type === 'pill' ? 'nav-stacked' : null,
      navStyle = getTypeClassMap(type)

    delete others.defaultActiveKey
    delete others.activeKey

    this.tabs = []

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

        return React.cloneElement(child, { ...options })
      }))

    return (
      <ul
        {...others}
        className={classnames('nav', navStacked, navStyle, className)}
      >
        {children}
        <div className='nav__active-bar' style={barStyle} />
      </ul>
    )
  }
}

Nav.Item = NavItem
Nav.Link = NavLink
Nav.Title = NavTitle

Nav.childContextTypes = {
  componentNav: PropTypes.any,
}
