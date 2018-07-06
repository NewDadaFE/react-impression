import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * ButtonGroup组件.
 */
export default class ButtonGroup extends PureComponent {
  // prop校验
  static propTypes = {
    // 大小（lg、sm）
    size: PropTypes.string,
    // 主题样式(primary、secondary、default)
    theme: PropTypes.string,
    // 激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
    activeKey: PropTypes.any,
    // 选中回调
    onSelect: PropTypes.func,
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    theme: 'default',
  }
  // 初始state
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: props.activeKey,
    }
  }
  // 渲染
  render() {
    let { activeKey } = this.state,
      { theme, size, className, onSelect, children, ...others } = this.props,
      btnGroupSize = size ? `btn-group-${size}` : null

    delete others.activeKey
    children = children.map((child, idx) => {
      let { eventKey, onClick } = child.props

      return React.cloneElement(child, {
        key: idx, // eslint-disable-line
        outline: theme !== 'default' && (!onSelect || activeKey !== eventKey),
        theme:
          theme === 'default' && onSelect && activeKey === eventKey
            ? 'primary'
            : theme,
        onClick: onSelect
          ? event => {
            this.setState({
              activeKey: eventKey,
            })
            onSelect && onSelect(eventKey, event)
            onClick && onClick(event)
          }
          : onClick,
      })
    })

    return (
      <div
        {...others}
        className={classnames('btn-group', btnGroupSize, className)}
      >
        {children}
      </div>
    )
  }
}
