import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class CheckboxGroup extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    // 是否木偶组件
    this.isPuppet = props.value !== undefined

    const initValue = {
      value: this.isPuppet ? undefined : props.defaultValue || [],
    }

    this.state = {
      ...initValue,
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
     * 选中的值
     */
    value: PropTypes.array,

    /**
     * 默认选中的值
     */
    defaultValue: PropTypes.array,

    /**
     * 状态变更回调
     */
    onChange: PropTypes.func,

    /**
     * 是否disabled
     */
    disabled: PropTypes.bool,

    /**
     * 排列方向
     */
    direction: PropTypes.oneOf(['row', 'column']),
  }

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

  onChangeHandle = (event, value) => {
    const { checked } = event.target
    const { onChange } = this.props

    if (this.isPuppet) {
      let propsValue = this.props.value,
        originValue = checked
          ? [...propsValue, value]
          : [...propsValue.filter(item => item !== value)]

      onChange && onChange(originValue, event)
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

CheckboxGroup.getValue = ref => {
  if (!ref) return undefined

  return ref.getValue()
}

CheckboxGroup.setValue = (ref, value) => {
  if (!ref) return

  ref.setValue(value)
}
