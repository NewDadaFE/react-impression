import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import NavItem from '../NavItem'
import NavLink from '../NavLink'
import NavTitle from '../NavTitle'

/**
 * 返回type映射的class
 * @param type
 * @param stacked
 * @returns {string|*|string}
 */
const getTypeClassMap = (type, stacked) => {
  if (stacked) return ''
  const map = {
    tab: 'nav-card',
    block: 'nav-block',
  }

  return map[type] || 'nav-normal'
}

class Nav extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: this.props.activeKey,
    }
    console.warn('ReactImpression: 建议使用 Tabs 组件替换 Nav 组件！')
  }

  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 导航栏样式
     */
    type: PropTypes.oneOf(['tab', 'inline']),

    /**
     * 是否纵向排列
     */
    stacked: PropTypes.bool,

    /**
     * 默认激活标签
     */
    activeKey: PropTypes.any,

    /**
     * 选中回调，参数列表：eventKey
     */
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    stacked: false,
    type: 'inline',
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { activeKey } = nextProps
    this.setState({
      activeKey,
    })
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
    const navStacked = stacked ? 'nav-stacked' : null
    const navStyle = getTypeClassMap(type, stacked)

    delete others.activeKey

    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      const { eventKey, onClick } = child.props
      const options = {
        key: index,
        onClick: (eventKey, event) => {
          this.onSelectHandle(eventKey)
          onClick && onClick(eventKey, event)
        },
      }
      if (typeof eventKey !== 'undefined') {
        options.eventKey = eventKey
        if (typeof activeKey !== 'undefined') {
          options.active = eventKey === activeKey
        }
      }

      return React.cloneElement(child, options)
    })

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

export default Nav
