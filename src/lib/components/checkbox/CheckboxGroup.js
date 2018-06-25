import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * CheckboxGroup组件.
 */
export default class CheckboxGroup extends PureComponent {
  // 初始化state
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    let initValue = {
      value: this.isPuppet ? undefined : props.defaultValue || [],
    }

    this.state = {
      ...initValue,
    }
  }
  // props校验
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 选中
    value: PropTypes.array,
    // 默认是否选中
    defaultValue: PropTypes.array,
    // 回调函数
    onChange: PropTypes.func,
    // 是否disabled
    disabled: PropTypes.bool,
    // 排列方向
    direction: PropTypes.oneOf(['row', 'column']),
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
  // checkbox选中回调函数
  onChangeHandle = (event, value) => {
    let { checked } = event.target,
      { onChange } = this.props

    if (this.isPuppet) {
      let propsValue = this.props.value,
        originValue = checked
          ? [...propsValue, value]
          : [...propsValue.filter(item => item !== value)]

      onChange && onChange(originValue)
    } else {
      let originValue = checked
        ? [...this.state.value, value]
        : [...this.state.value.filter(item => item !== value)]

      this.setState(
        {
          value: originValue,
        },
        () => {
          onChange && onChange(originValue, event)
        }
      )
    }
  }
  // 渲染
  render() {
    let { className, direction, children, ...others } = this.props

    children = React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      let { value, disabled, children } = child.props

      value = value !== undefined ? value : `${children}`

      return React.cloneElement(child, {
        value,
        key: index,
        onChange: this.onChangeHandle,
        disabled: disabled || this.props.disabled,
        checked: this.isPuppet
          ? this.props.value.indexOf(value) !== -1
          : this.state.value.indexOf(value) !== -1,
      })
    })

    delete others.onChange

    return (
      <div
        {...others}
        className={classnames(
          direction === 'row' ? 'checkbox-inline' : 'checkbox-vertical',
          className
        )}
      >
        {children}
      </div>
    )
  }
}

// getValue
CheckboxGroup.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

// setValue
CheckboxGroup.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
