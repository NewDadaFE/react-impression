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
    theme: PropTypes.oneOf(['primary', 'secondary']),

    /**
     * 激活索引（被选中Button会额外添加选中样式，为空时不额外添加选中样式）
     */
    activeKey: PropTypes.any,

    /**
     * 选中回调，参数列表：eventKey，event
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
    theme: 'secondary',
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      activeKey: props.activeKey,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.activeKey !== this.state.activeKey &&
      prevState.activeKey === this.state.activeKey
    ) {
      this.setState({
        activeKey: this.props.activeKey,
      })
    }
  }

  render() {
    let { theme, size, className, onSelect, children, ...others } = this.props
    const { activeKey } = this.state
    const btnGroupSize = size ? `btn-group-${size}` : null

    delete others.activeKey
    children = children.map((child, idx) => {
      const { eventKey, onClick } = child.props
      const getBtnTheme = theme => {
        if (activeKey !== eventKey) {
          return theme
        } else {
          return theme !== 'primary' ? 'primary' : theme
        }
      }

      return React.cloneElement(child, {
        key: idx,
        theme: getBtnTheme(theme),
        onClick: event => {
          this.setState({
            activeKey: eventKey,
          })
          onSelect && onSelect(eventKey, event)
          onClick && onClick(event)
        },
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
