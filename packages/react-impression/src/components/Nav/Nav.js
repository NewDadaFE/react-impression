import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from '../NavItem'
import NavLink from '../NavLink'
import NavTitle from '../NavTitle'

/**
 * 返回type映射的class
 * @param type
 * @returns {string}
 */
const getTypeClassMap = type => {
  const map = {
    tab: 'nav-tabs',
    pill: 'nav-pills',
    inline: 'nav-inline',
    'inline-bordered': 'nav-inline nav-inline-bordered',
  }

  return map[type] ? map[type] : type
}

export default class Nav extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: this.props.activeKey,
    }
  }

  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.any,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 导航栏样式
     */
    type: PropTypes.oneOf(['tab', 'pill', 'inline', 'inline-bordered']),
    /**
     * 是否纵向排列
     */
    stacked: PropTypes.bool,
    /**
     * 默认激活标签
     */
    activeKey: PropTypes.any,
    /**
     * 选中回调函数
     */
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    stacked: false,
  }
  /**
   * 选中回调
   * @param eventKey
   * @returns {boolean}
   */
  onSelectHandle = eventKey => {
    const { activeKey } = this.state
    const { onSelect } = this.props

    if (activeKey === eventKey) {
      return false
    }
    this.setState({ activeKey: eventKey })
    onSelect && onSelect(eventKey)

    return true
  }

  render() {
    let { children } = this.props
    const { type, stacked, className, ...others } = this.props
    const { activeKey } = this.state
    const navStacked = stacked && type === 'pill' ? 'nav-stacked' : null
    const navStyle = getTypeClassMap(type)

    delete others.activeKey

    if (type) {
      children = React.Children.map(children, (child, index) => {
        if (!child) {
          return child
        }

        const { eventKey } = child.props
        const options = {
          key: index,
          onClick: this.onSelectHandle,
        }

        if (eventKey !== undefined) {
          options.eventKey = eventKey
          options.active = eventKey === activeKey
        }

        return React.cloneElement(child, options)
      })
    }

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
