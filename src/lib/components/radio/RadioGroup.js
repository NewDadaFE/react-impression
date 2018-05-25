import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * RadioGroup组件.
 */
export default class RadioGroup extends PureComponent {
  // 初始化state
  constructor(props) {
    super(props)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    let initValue = {
      value: this.isPuppet ? undefined : props.defaultValue,
    }

    this.state = {
      ...initValue,
    }
  }
  // props校验
  static propTypes = {
    // 自定义样式
    className: PropTypes.string,
    // 值
    value: PropTypes.any,
    // 默认是否选中
    defaultValue: PropTypes.any,
    // 回调函数
    onChange: PropTypes.func,
    // 是否disabled
    disabled: PropTypes.bool,
    // 名称
    name: PropTypes.string,
    // 排列方向
    direction: PropTypes.oneOf(['row', 'column']),
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    disabled: false,
    direction: 'row',
  }
  getValue() {
    return this.isPuppet ? this.props.value : this.state.value
  }
  setValue(value) {
    if (!this.isPuppet) this.setState({ value })
  }
  // radio切换回调函数
  onChangeHandle = (event, value) => {
    let { onChange } = this.props

    if (this.isPuppet) {
      onChange && onChange(value, event)
    } else {
      this.setState(
        {
          value,
        },
        () => {
          onChange && onChange(value, event)
        }
      )
    }
  }
  // 渲染
  render() {
    let { className, name, direction, children, ...others } = this.props
    let originValue = this.isPuppet ? this.props.value : this.state.value
    let directionClass = direction === 'row' ? 'radio-inline' : 'radio-vertical'

    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      let { value, disabled } = child.props
      let options = {
        name: name || `radio_${this._reactInternalInstance._mountOrder}`,
        key: index,
        onChange: this.onChangeHandle,
        disabled: disabled || this.props.disabled,
      }

      // 是否选中
      if (value !== undefined || originValue !== undefined) {
        options.checked = originValue === value
      }

      return React.cloneElement(child, options)
    })

    delete others.onChange

    return (
      <div {...others} className={classnames(directionClass, className)}>
        {children}
      </div>
    )
  }
}

// getValue
RadioGroup.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
RadioGroup.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
