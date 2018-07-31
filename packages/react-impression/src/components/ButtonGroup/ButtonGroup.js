import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class ButtonGroup extends React.PureComponent {
  static propTypes = {
    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['sm', 'lg']),

    /**
     * 主题样式
     */
    theme: PropTypes.oneOf(['primary', 'secondary', 'default']),

    /**
     * 激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
     */
    activeKey: PropTypes.any,

    /**
     * 选中回调
     */
    onSelect: PropTypes.func,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: 'default',
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: props.activeKey,
    }
  }

  render() {
    let { theme, size, className, onSelect, children, ...others } = this.props
    const { activeKey } = this.state
    const btnGroupSize = size ? `btn-group-${size}` : null

    delete others.activeKey
    children = children.map((child, idx) => {
      let { eventKey, onClick } = child.props

      return React.cloneElement(child, {
        key: idx,
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
